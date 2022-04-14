import { useRedux } from '../../../services/fetch'
import { ContainerApp } from '../../../containers';

import { useEffect, useState } from 'react';

import { _setAvailableMedical, _setMedical, _updateProgress } from '../../../store/actions/form';
import { _setPageSubtitle } from '../../../store/actions/informations';

import styled from 'styled-components';

import { dateFormat, identifyProgressLink } from '../../../constants';
import { nextProgress } from '../nextProgress';

import { isAvailableSchedule } from '../../../services/app/steps/store';

const Alter = styled.span`
font-weight: normal;
color: var(--bs-primary);
cursor: pointer
`;

const extract = datetime => {
    const _date = new Date(datetime)
    return {
        _date: _date,
        dateText: () => dateFormat(_date),
        date: () => _date.toLocaleDateString(),
        time: () => [_date.getHours(), (_date.getMinutes() < 10 ? `${_date.getMinutes()}0` : _date.getMinutes())].join(':'),
    }
}

const Confirm = () => {

    const { formValues, dispatch } = useRedux()

    const [ date, setDate ] = useState(null)
    const [ time, setTime ] = useState(null)

    const { name, category, medical, availableMedical, progress } = formValues 

    const title = 'Confirmar agendamento'

    const _confirm = () => {
        const { isAvailable } = isAvailableSchedule(availableMedical)
        if (isAvailable) {
            identifyProgressLink(4, dispatch, formValues)
        }
        console.log(formValues, isAvailable)
    }

    useEffect(() => {

        if (availableMedical != null) {
            setDate(extract(availableMedical.datetime).dateText())
            setTime(extract(availableMedical.datetime).time())
        } else {
            nextProgress(dispatch, formValues)
        }

        dispatch(_setPageSubtitle(title))

        console.log(formValues)

    }, [])

    return (
        <ContainerApp current={title}>
            <div className="col-md-12">
                <h2>Confimar agendamento</h2> 
                <p>Por favor, verifique se o dia e horário escolhido está correto.</p>

                <p>Sr(a). <strong>{name.toUpperCase()}</strong></p>
                <p>
                    Sua consulta será agendada com <strong>Dr. (a) {medical}</strong>, <strong>{category}.</strong>
                    <br/> <strong>{date}</strong> às <strong>{time}</strong>. <Alter onClick={() => {
                        dispatch(_updateProgress(progress - 1))
                        dispatch(_setAvailableMedical(null))
                        dispatch(_setMedical(null))
                    }}>Escolher novo horário</Alter>
                </p>
                <button
                style={{
                    marginBottom: '1em'
                }}
                className="btn btn-primary"
                onClick={ _confirm }
                >
                    Confirmar e continuar
                </button>
            </div>
        </ContainerApp>
    )

}

export { Confirm }
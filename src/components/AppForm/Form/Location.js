import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Form from 'react-bootstrap/Form';

import { useSelector, useDispatch } from "react-redux";

import form from '/src/_assets/css/modules/appForm.module.css';

import { 
    _setAllowGeolocation, 
    _setManualGeolocation,
    _setSupportGeolocation,
    _setCoordinates
} from '../../../store/actions/form';

import { _setPageSubtitle } from '../../../store/actions/informations';

import elem from '../../../_assets/css/modules/interactive.module.css';
import { selectThisOption, removeByClassName } from '../../../constants';

import { toast } from 'react-toastify';

import { Loading } from '../';
import { useEffect, useState } from 'react';

import { nextProgress } from '../nextProgress';
import { ContainerApp } from '../../../containers';

const Location = ({ user: _user }) => {

    const [ manualPostalCode, setManualPostalCode ] = useState(false)
    const [ geolocationEnabled, setGeolocationEnabled ] = useState(false)

    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues);

    const [ loading, setLoading ] = useState(false)

    const validationSchema = Yup.object().shape({
        postalCode: Yup.string()
    })

    const formOptions = { resolver: yupResolver(validationSchema) }

    const { register, handleSubmit, setError, formState } = useForm(formOptions)
    const { errors } = formState

    const handleNextProgress = (_manualGeolocation) => {
        
        if (_manualGeolocation == 'getCurrentLocation') {
            setManualPostalCode(false)
        } else {
            setManualPostalCode(true)
        }

        dispatch(_setManualGeolocation(_manualGeolocation))
        if (formValues.manualGeolocation != null || formValues.manualGeolocation != '') {
            nextProgress(dispatch, formValues)
        }
    }

    const onSubmit = ({ postalCode }) => {

        if (postalCode == '' && !geolocationEnabled) {
            dispatch(_setManualGeolocation(null))
        }
        if (postalCode != '') {
            handleNextProgress( postalCode )
        } 
        if (geolocationEnabled) {
            handleNextProgress( 'getCurrentLocation' )
        }
    }

    const navigatorGeolocation = () => {

        const geoEnabled = (position) => {
            dispatch(_setAllowGeolocation(true))
            dispatch(_setManualGeolocation('getCurrentLocation'))
            dispatch(_setCoordinates(position.coords))
        }

        const geoDisabled = () => {
            dispatch(_setAllowGeolocation(false))
            dispatch(_setManualGeolocation(null))
            toast.info('Você precisa ativar a geolocalização do navegador')
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geoEnabled, geoDisabled)
        } else {
            dispatch(_setSupportGeolocation(false))
        }

    }

    useEffect(() => {
        dispatch(_setPageSubtitle('Sua localização'))
    }, [])

    if (loading)
        return <Loading />
    
    return (
        <ContainerApp current={'Localização'}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Sua localização</h2>
                <p>Informe sua localização para que possamos buscar o especialista mais próximo</p>
                <Form.Group className="mb-3">
                    <Form.Label>CEP</Form.Label>
                    <input 
                    className="form-control"
                    name="postalCode"
                    type="text"
                    placeholder="00000-000" 
                    pattern="\d{5}-\d{3}"
                    defaultValue={formValues.manualGeolocation != 'getCurrentLocation' ?  _user.postalCode : null}
                    onKeyUp={ () => {
                        setManualPostalCode(true)
                        removeByClassName(`.${elem.selected}`, elem.selected)
                    }}
                    {...register('postalCode')}
                    />
                    <Form.Text className="text-muted">Por favor, insira o código postal ou utilize sua localização atual.</Form.Text>
                    <div className="invalid-feedback">{errors.postalCode?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="postalCode">
                    <button onClick={ e => {
                        e.preventDefault()
                        setLoading(true)
                        navigatorGeolocation()
                        setLoading(false)
                        e.target.className = selectThisOption(e)

                        setManualPostalCode(false)
                        setGeolocationEnabled(!geolocationEnabled)
                        
                    }} className={formValues.manualGeolocation != 'getCurrentLocation' ? form.buttonLocation : `${form.buttonLocation} ${selectThisOption(null, true)}`}>
                        <i className="bi bi-geo"></i> Usar minha localização atual
                    </button>
                </Form.Group>
                
                <button
                type="submit" 
                className="btn btn-primary"
                >
                    Salvar e continuar
                </button>

            </Form>
        </ContainerApp>
    )
}

export { Location }
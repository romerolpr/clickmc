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
    const formValues = useSelector( (state) => state.formValues)
    const userValues = useSelector( (state) => state.userValues)

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
        if (userValues.network_status_connection) {

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
    }

    const navigatorGeolocation = () => {

        if (userValues.network_status_connection) {

            
            const geoEnabled = (position) => {
                dispatch(_setAllowGeolocation(true))
                dispatch(_setManualGeolocation('getCurrentLocation'))
                dispatch(_setCoordinates(position.coords))
                toast.success('Geolocaliza????o ativada')
            }

            const geoDisabled = (error) => {
                dispatch(_setAllowGeolocation(false))
                dispatch(_setManualGeolocation(null))
                toast.info('Voc?? precisa ativar a geolocaliza????o do navegador')
            }


            if (navigator.geolocation) {
                return navigator.geolocation.getCurrentPosition(geoEnabled, geoDisabled)
            } else {
                dispatch(_setSupportGeolocation(false))
            }
            
        }

        return false
    }

    useEffect(() => {
        dispatch(_setPageSubtitle('Sua localiza????o'))
    }, [])

    if (loading)
        return <Loading />
    
    return (
        <ContainerApp current={'Localiza????o'}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Sua localiza????o</h2>
                <p>Informe sua localiza????o para que possamos buscar o especialista mais pr??ximo</p>
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
                    <Form.Text className="text-muted">Por favor, insira o c??digo postal ou utilize sua localiza????o atual.</Form.Text>
                    <div className="invalid-feedback">{errors.postalCode?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="postalCode">
                    <button onClick={ e => {
                        e.preventDefault()
                        
                        if (navigatorGeolocation()) {
                            e.target.className = selectThisOption(e)
                            setManualPostalCode(false)
                            setGeolocationEnabled(!geolocationEnabled)
                        } else {
                            toast.error('Falha ao tentar obter sua geolocaliza????o.')
                        }
                        
                    }} className={formValues.manualGeolocation != 'getCurrentLocation' ? form.buttonLocation : `${form.buttonLocation} ${selectThisOption(null, true)}`}>
                        <i className="bi bi-geo"></i> Usar minha localiza????o atual
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
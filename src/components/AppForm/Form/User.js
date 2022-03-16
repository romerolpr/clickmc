import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Form from 'react-bootstrap/Form';

import { useSelector, useDispatch } from "react-redux";

import { 
    _setPageSubtitle
} from '../../../store/actions/informations';

import { ContainerApp } from '../../../containers';

import { Loading } from '../';
import { useEffect, useState } from 'react';

import { nextProgress } from '../nextProgress';
import { _setName, _setPhone } from '../../../store/actions/form';

const User = () => {

    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues);

    const [ loading, setLoading ] = useState(false)

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Seu nome é obrigatório'),
        phone: Yup.string()
            .matches(/^(\+\d{2})\s(\d{2}\s*9).*(\d{8}|\d{4}-\d{4})$/, 'Informe um número de telefone válido. Ex: +55 11 9 1111-1111')
            .required('Seu nome é obrigatório')
    })

    const formOptions = { resolver: yupResolver(validationSchema) }

    const { register, handleSubmit, setError, formState } = useForm(formOptions)
    const { errors, isSubmitting  } = formState

    const onSubmit = ({ name, phone }) => {

        dispatch(_setName(name))
        dispatch(_setPhone(phone))
        nextProgress(dispatch, formValues)

    }

    useEffect(() => {
        dispatch(_setPageSubtitle('Seus dados básicos'))
    }, [])

    if (loading)
        return <Loading />
    
    return (
        <ContainerApp current={'Você'}>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <p className="text-muted">Por favor, informe seu nome para que possamos informar ao médico</p>

                <Form.Group className="mb-3">
                    <Form.Label>Seu nome</Form.Label>
                    <input 
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="Informe seu nome" 
                    {...register('name')}
                    defaultValue={formValues.name != null ? formValues.name : null}
                    />
                    <Form.Text className="invalid-feedback">{errors.name?.message}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Seu telefone</Form.Label>
                    <input 
                    name="phone"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    type="text"
                    placeholder="Informe seu telefone" 
                    defaultValue={formValues.phone != null ? formValues.phone : null}
                    {...register('phone')}
                    />
                    <Form.Text className="invalid-feedback">{errors.phone?.message}</Form.Text>
                </Form.Group>
                
                <button
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                >
                    {isSubmitting ? 'Salvando...' : 'Salvar e continuar' }
                </button>

            </Form>
        </ContainerApp>
    )
}

export { User }
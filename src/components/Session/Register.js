import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';

import { userService } from '../../services';

import { toast } from 'react-toastify';

import { useRedux } from '../../services/fetch';

import {
    _setName,
    _setPhone
} from '../../store/actions/form'
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';

const Register = ({ thereIsAccount, redirect, children }) => {

    const router = useRouter()

    const { formValues, dispatch } = useRedux()

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Nome é obrigatório.'),
        username: Yup.string()
            .required('Nome de usuário é obrigatório.')
            .min(6, 'Nome de usuário precisa ter pelo menos 6 caracteres.')
            .matches(/^(|^.$|^[^0-9\W_].*\d?.*[^\W_])+$/, 'O nome de usuário precisa ser válido.')
            .test('Unique username', 'O nome de usuário já está em uso.', // <- key, message
                function (value) {
                    const fetching = new Promise((resolve, reject) => {
                        userService.getById(value)
                        .then( x => resolve(!x) ) 
                        .catch( e => resolve(e) )
                    })
                    return fetching
                }
            ),
        phone: Yup.string()
            .required('Número de telefone é obrigatório.')
            .matches(/^(\+\d{2})\s(\d{2}\s*9).*(\d{8}|\d{4}-\d{4})$/, 'Informe um número de telefone válido.'),
        dob: Yup.string()
            .required('Data de nascimento é obrigatória')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Data de nascimento precisa ser válida: YYYY-MM-DD.'),
        email: Yup.string()
            .required('E-mail é obrigatório.')
            .email('Informe um e-mail válido.')
            .test('Unique email', 'O e-mail já está em uso.', // <- key, message
                function (value) {
                    return new Promise((resolve, reject) => {
                        userService.getById(value)
                        .then( x => resolve(!x) ) 
                        .catch( e => resolve(e) )
                    })
                }
            ),
        password: Yup.string()
            .min(6, 'A senha precisa conter pelo menos 6 caracteres')
            .test('Invalid password', 'A senha precisa estar nos padrões exigidos.', (value) => {
                if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/.test(value)) {
                    return true
                }
                return false
            })
            .required('Senha é obrigatório'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'As senhas não coincidem')
            .required('Confirmação de senha obrigatório'),
        acceptTerms: Yup.bool()
            .oneOf([true], null)
    })

    const formOptions = { resolver: yupResolver(validationSchema) }

    const { register, handleSubmit, setError, formState } = useForm(formOptions)
    const { errors, isSubmitting  } = formState

    const onSubmit = async (user) => {
        const body = {
            username: user.username,
            password: user.password,
            email: user.email,
            name: user.name,
            phone: user.phone,
            dob: user.dob
        }
        return userService.register(body)
            .then( () => {
                thereIsAccount(true)
                toast.success('Sua conta foi criada com sucesso')
                dispatch( _setName(user.name) )
                dispatch( _setPhone(user.phone) )
                if (redirect != undefined) {
                    router.push('/')
                }
            })
            .catch( (error) => {
                console.error(error)
            })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12 mb-3 fleft">
                { children }
            </div>

            <Form.Group className="mb-3">
                <Form.Label>Seu nome</Form.Label>
                <input 
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                type="text"
                placeholder="Informe seu nome completo" 
                defaultValue={formValues.name != null ? formValues.name : ''}
                {...register('name')}
                />
                <Form.Text className="invalid-feedback">{errors.name?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nome de usuário</Form.Label>
                <input 
                name="username"
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                type="text"
                placeholder="Informe seu nome de usuário"
                {...register('username')}
                />
                <Form.Text>O nome de usuário não poderá ser modificado depois</Form.Text>
                <Form.Text className="invalid-feedback">{errors.username?.message}</Form.Text>
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>Seu telefone</Form.Label>
                <input 
                name="phone"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                type="text"
                placeholder="Informe seu telefone"
                defaultValue={formValues.phone != null ? formValues.phone : ''}
                {...register('phone')}
                />
                <Form.Text className="invalid-feedback">{errors.phone?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Seu e-mail</Form.Label>
                <input 
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                type="email"
                placeholder="Informe seu e-mail" 
                {...register('email')}
                />
                <Form.Text className="invalid-feedback">{errors.email?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Data de nascimento</Form.Label>
                <input 
                name="dob"
                className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                type="date"
                placeholder="Informe sua data de nascimento" 
                {...register('dob')}
                />
                <Form.Text className="invalid-feedback">{errors.dob?.message}</Form.Text>
            </Form.Group>

            {errors.password && (
                <Fragment>
                    <p style={{
                        margin: '.5em 0',
                        color: '#666'
                    }}>Sua senha:</p>

                    <ul className="give-password">
                        <li>deve conter ao menos um dígito.</li>
                        <li>deve conter ao menos uma letra maiúscula e minúscula.</li>
                        <li>deve conter ao menos um caractere especial.</li>
                        <li>deve conter ao menos de 6 caracteres.</li>
                    </ul>
                </Fragment>
            )}

            <div className="row">
                <Form.Group className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                    <Form.Label>Senha</Form.Label>
                    <input 
                    name="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    type="password"
                    placeholder="Informe sua senha" 
                    {...register('password')}
                    />
                    <Form.Text className="invalid-feedback">{errors.password?.message}</Form.Text>
                </Form.Group>

                <Form.Group className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-3">
                    <Form.Label>Confirmar senha</Form.Label>
                    <input 
                    name="confirmPassword"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    type="password"
                    placeholder="Informe sua senha novamente" 
                    {...register('confirmPassword')}
                    />
                    <Form.Text className="invalid-feedback">{errors.confirmPassword?.message}</Form.Text>
                </Form.Group>
            </div>

            <Form.Group className="mt-3">
                <button
                type="submit" 
                className="btn btn-primary"
                style={{
                    marginRight: '.25em'
                }}
                disabled={isSubmitting}
                >
                    {isSubmitting ? 'Aguarde...' : 'Criar conta' }
                </button>

                <button
                className="btn btn-transparent"
                onClick={(e) => {
                    e.preventDefault()
                    thereIsAccount(true)
                }}
                >
                    {isSubmitting ? 'Aguarde...' : 'Já tenho conta' }
                </button>
            </Form.Group>

        </Form>
    )
}

export { Register }
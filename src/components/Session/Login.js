import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Form } from 'react-bootstrap';

import { useRouter } from 'next/router';

import { toast } from 'react-toastify';

import { userService } from '../../services';
import { useState } from 'react';

const Login = ({ thereIsAccount, setAuthorized, redirect, children }) => {

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('O nome de usuário não pode ficar vazio.'),
        password: Yup.string().required('A senha não pode ficar vazia.')
    })

    const [ isAuthorized, setIsAuthorized ] = useState(false)

    const formOptions = { resolver: yupResolver(validationSchema) }

    const { register, handleSubmit, setError, reset, formState } = useForm(formOptions)
    const { errors, isSubmitting  } = formState

    const onSubmit = ({ username, password }) => {

        if (!userService.userValue) {

          userService.login(username, password)
              .then( user => {
                  if (user.token != undefined) {
                    console.log(user.token, isAuthorized)
                    setAuthorized(true)
                  }
              })
              .catch( msgError => { 
                  toast.error(msgError)
                  setError("apiError", {
                    type: "apiError",
                    message: "Nome de usuário ou senha inválidos.",
                  })
              })
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12 mb-3 fleft">
                { children }
            </div>
            <Form.Group className="mb-3">
                <Form.Label>Nome de usuário</Form.Label>
                <input 
                name="username"
                className={`form-control ${errors.username || errors.apiError ? 'is-invalid' : ''}`}
                type="text"
                placeholder="Informe seu nome de usuário" 
                {...register('username')}
                />
                <Form.Text className="invalid-feedback">{errors.username?.message || errors.apiError?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <input 
                name="password"
                className={`form-control ${errors.password || errors.apiError ? 'is-invalid' : ''}`}
                type="password"
                placeholder="Informe sua senha" 
                {...register('password')}
                />
                <Form.Text className="invalid-feedback">{errors.password?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mt-3">
                <button
                type="submit" 
                className="btn btn-primary"
                style={{
                    marginRight: '.25em'
                }}
                disabled={isSubmitting}
                >
                    {isSubmitting ? 'Acessando...' : 'Acessar' }
                </button>

                <button
                className="btn btn-transparent"
                onClick={(e) => {
                    e.preventDefault()
                    thereIsAccount(false)
                }}
                >
                    {isSubmitting ? 'Aguarde...' : 'Criar nova conta' }
                </button>
            </Form.Group>
        </Form>
    )
}

export { Login }
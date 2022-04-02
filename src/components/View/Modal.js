import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';
import { userService } from '../../services';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'react-bootstrap';

import { ClientLevel, validationSchemaClient } from '../Account/ClientLevel';
import { API } from '../../constants';

export const ModalConfigAccount = ({ previousValue }) => {
    
    const [ authorization, setAuthorization ] = useState(false)

    const formOptions = { 
        resolver: yupResolver(validationSchemaClient) 
    }

    const { register, handleSubmit, reset, formState } = useForm(formOptions)

    const { errors, isSubmitting } = formState

    const onSubmit = async data => {
        const request = {
            name: data.name,
            description: data.description,
            phone: data.phone,
            address: data.address,
            county: data.county,
            number: data.number,
            postalCode: data.postalCode
        }

        API.put(`usuario/configuracao/conta/${userService.userValue.username}`, 
        request,
        {
            headers: {
                authorization: `Bearer ${userService.userValue.token}`
            }
        })
        .then(response => {
            if (response.status == 200) {
                toast.success('Seus dados foram atualizados com sucesso!')
                setAuthorization(true)
            } else {
                toast.error('Houve algum erro ao atualizar os dados')
            }
        })
        .catch(() => toast.error('Não foi possível alterar seus dados'))
    }

    return (
        <>
        <Modal
            show={!authorization}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
            <Modal.Title>
                Configurações da conta
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <p>Bem vindo <strong>@{userService.userValue.username}</strong>! Verificamos que você ainda não finalizou a configuração da sua conta.</p>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <ClientLevel 
                    previousValue={previousValue}
                    register={register} 
                    errors={errors}/>
                </Form>

            </Modal.Body>

            <Modal.Footer>

                <Button
                onClick={handleSubmit(onSubmit)}
                variant="primary">
                    Salvar
                </Button>

            </Modal.Footer>

        </Modal>
        </>
    )
}
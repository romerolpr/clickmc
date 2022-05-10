import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';
import { userService } from '../../services';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'react-bootstrap';

import { ClientLevel, validationSchemaClient } from '../Account/ClientLevel';
import { API } from '../../constants';

import { useRedux } from '../../services/fetch'
import { 
    _setUserName,
    _setUserAddress,
    _setUserBirthday,
    _setUserCounty,
    _setUserNumber,
    _setUserPhone,
    _setUserEmail,
    _setUserPostalCode
 } from '../../store/actions/users'
import { CLIENT_ACCOUNT_LEVEL } from '../../_settings/_auth';
import { MedicalLevel } from '../Account/MediclLevel';

export const ModalConfigAccount = ({ previousValue }) => {
    
    const { dispatch } = useRedux()
    const [ authorization, setAuthorization ] = useState(false)

    const formOptions = { 
        resolver: yupResolver(validationSchemaClient) 
    }

    const account = userService.userValue?._type

    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    
    const [ data, setData ] = useState({
        categmedicId: null,
        daysCall: 0
    })

    const { errors, isSubmitting } = formState

    const onSubmit = async input => {
        const request = {
            name: input.name,
            description: input.description,
            phone: input.phone,
            address: input.address,
            county: input.county,
            number: input.number,
            postalCode: input.postalCode
        }

        if (account != CLIENT_ACCOUNT_LEVEL) {
            request = {
                ...request,
                ...data,
                crm: input.crm,
                price: input.price
            }
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

                dispatch( _setUserName(request.name) )
                dispatch( _setUserBirthday(request.birthday) )
                dispatch( _setUserAvatar(request.backdrop) )
                dispatch( _setUserPhone(request.phone) )
                dispatch( _setUserEmail(request.email) )
                dispatch( _setUserAddress(request.address) )
                dispatch( _setUserPostalCode(request.postalCode) )
                dispatch( _setUserNumber(request.number) )
                dispatch( _setUserCounty(request.county) )
                setAuthorization(true)
                location.replace('/perfil')
            } else {
                toast.error('Houve algum erro ao atualizar os dados')
            }
        })
        .catch(error => console.error(error))
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
                    {account == CLIENT_ACCOUNT_LEVEL ? 
                    <ClientLevel 
                    previousValue={previousValue}
                    register={register} 
                    errors={errors}/>
                    : 
                    <MedicalLevel 
                    previousValue={previousValue} 
                    register={register} 
                    errors={errors}
                    data={data}
                    setData={setData}/>}
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
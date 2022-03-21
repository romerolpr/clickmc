import { useRedux } from "../../../services/fetch";
import { Loading } from "../..";
import { ContainerApp } from "../../../containers";

import { useEffect, useState } from 'react';

import { TIMEOUT_CONTENT_LOADED } from "../../../_settings";

import { Payment } from "./Payment";

import { userService } from "../../../services";
import { Login, Register } from "../../Session";

const Finish = () => {

    const [ loading, setLoading ] = useState(true)
    const { formValues, dispatch } = useRedux()

    const [ authorized, setAuthorized ] = useState(false)

    const [ thereIsAccount, setThereIsAccount ] = useState(false)

    useEffect(() => {

        setTimeout(() => { 
            setLoading(false)
        }, TIMEOUT_CONTENT_LOADED * 2)

    }, [])

    const ManageFinish = () => {
        if (userService.userValue != undefined) {
            return (
                <ContainerApp current={'Pagamento'}>
                    <h2>Escolha sua opção de pagamento</h2>
                    <p>Selecione a melhor forma de pagamento para você, e cada médico possui seu valor.</p>
                    <Payment payments={[
                        { 
                            method: 'cartão de crédito', 
                            type: 'cartao-credito',
                            price: 50,
                            // discount: 50,
                            installments: {
                                times: 3,
                                interest: false
                            },
                            api: ''
                        },
                        { method: 'Pix', type: 'pix', price: 50, api: '' },
                        { method: 'Boleto', type: 'boleto', price: 50, api: ''  }
                    ]}/>
                </ContainerApp>
            )
        }
        if (thereIsAccount) {
            return (
                <ContainerApp current={'Accesar conta'}>
                    <Login thereIsAccount={setThereIsAccount} setAuthorized={setAuthorized}>
                        <h2>Faça login para continuar</h2>
                    </Login>
                </ContainerApp>
            )
        }
        return (
            <ContainerApp current={'Criar conta'}>
                <Register thereIsAccount={setThereIsAccount} setAuthorized={setAuthorized}>
                    <h2>Crie sua conta para continuar</h2>
                </Register>
            </ContainerApp>
        )
    }

    if (loading)
        return <Loading textLabel={'Verificando alguns dados...'} />

    return <ManageFinish />

}

export { Finish }
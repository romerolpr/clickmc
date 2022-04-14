import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { Fragment, useEffect, useState } from 'react';
import { Update } from '../components';
import account from '/src/_assets/css/modules/myaccount.module.css';
import { userService } from '../services';
import { dateFormat } from '../constants';
import { useRedux } from '../services/fetch';

import { ModalConfigAccount } from '../components';
import { TIMEOUT_CONTENT_LOADED } from '../_settings';
import { API } from '../constants';
import { CLIENT_ACCOUNT_LEVEL, MEDICAL_ACCOUNT_LEVEL } from '../_settings/_auth';

const MyAccount = () => {
    
    const { userValues } = useRedux()
    
    const [ repository, setRepository ] = useState(null)

    const [ updateAccount, setUpdateAccount ] = useState(null)

    const AccountUpdate = ({ 
        item, 
        label, 
        value }) => (
        <Fragment>
            <span>{value == '' || value == null ? '-' : value}</span>
            <span onClick={() => setUpdateAccount({
                title: label, 
                key: item,
                value: value
            })}
            className={account.button_change}>
                {value == '' || value == null ? 'Adicionar' : 'Alterar'} {label} <i className="bi bi-pen-fill"></i>
            </span>
        </Fragment>
    )

    const IdentifyAccountTestLevel = repo => {
        const { name, description, phone, county, address, number, postalCode, categmedicId, crm, daysCall, price, valDiscount } = repo
        switch (userService.userValue._type) {
            case CLIENT_ACCOUNT_LEVEL:
                const client = [
                    name,
                    // description,
                    phone,
                    county,
                    address,
                    number,
                    postalCode
                ]
                if (client.includes(null)) return true
                break
            case MEDICAL_ACCOUNT_LEVEL:
                const medical = [
                    name,
                    description,
                    phone,
                    county,
                    address,
                    number,
                    postalCode,
                    categmedicId, 
                    crm, 
                    daysCall, 
                    price, 
                    valDiscount
                ]
                if (medical.includes(null)) return true
                break
            default:
                return false
        }
    }

    const FinalConfigurationStep = () => {
        if (repository != null && IdentifyAccountTestLevel(repository)) {
            return <ModalConfigAccount previousValue={repository} />   
        }
        return null
    }

    useEffect(() => {

        if (repository == null) {
            API
            .get(`/usuario/username/${userService.userValue.username}`)
            .then( res => {
                const response = res
                if ([200, 202].includes(response.status)) {
                    const { location, details, medicalDetails } = response.data[0]
                    setRepository({
                        ...location,
                        ...details,
                        ...medicalDetails
                    })
                }
            })
        }

        return () => setRepository(null)

    }, [])


    if (updateAccount != null) {
        return <Update item={updateAccount} updateAccount={setUpdateAccount}/>
    }
    
    return (
        <div className="col-12">

            {repository != null && <FinalConfigurationStep />}

            <div className="row mb-3">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <span className={account.title_box}>Financeiro</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            {userService.getAllCards().length > 0 ? userService.getAllCards().map((card) => {
                                const cardDecrypt = JSON.parse(userService.decrypt(card))

                                if (cardDecrypt.card.username == userService.userValue.username) {
                                    return (
                                        <Fragment>
                                            <span className={account.subtitle}>Cartão de crédito</span>
                                            <span>{cardDecrypt.flag} **** {cardDecrypt.card.nr.split(' ')[3]}</span>
                                        </Fragment>
                                    )
                                }
                            }) : (
                                <Fragment>
                                    <span className={account.subtitle}>Cartão de crédito</span>
                                    <span>Nenhum</span>
                                </Fragment>
                            )}
                            <span onClick={() => setUpdateAccount({
                                title: 'Cartões de crédito', 
                                key: 'card',
                                value: null
                            })}
                            className={account.button_change}>
                                {userService.getAllCards().length > 0 ? 'Alterar' : 'Adicionar'} cartão <i className="bi bi-pen-fill"></i>
                            </span>
                        </div>
                    </div>
                    <span className={account.title_box}>Informações de acesso</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Nome de usuário</span>
                            <span>{`@${userService.userValue.username}`}</span>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>E-mail</span>
                            <AccountUpdate 
                            item='email' 
                            value={userValues.email}
                            label={'E-mail'}/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Senha</span>
                            <AccountUpdate 
                            item='password' 
                            value={'********'}
                            label={'Senha'}/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Data de nascimento</span>
                            <AccountUpdate 
                            item='birthday' 
                            value={`${dateFormat(userValues.birthday, true)}`}
                            label={'Nascimento'}/>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <span className={account.title_box}>Informações pessoais</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Nome</span>
                            <AccountUpdate 
                            item='name' 
                            value={userValues.name}
                            label={'Nome'}/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Telefone</span>
                            <AccountUpdate 
                            item='phone' 
                            value={userValues.phone}
                            label={'Telefone'}/>
                        </div>
                    </div>

                    <span className={account.title_box}>Endereço</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Endereço</span>
                            <AccountUpdate 
                            item='address' 
                            value={userValues.address}
                            label={'Endereço'}/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Código postal</span>
                            <AccountUpdate 
                            item='cep' 
                            value={userValues.postalCode}
                            label={'CEP'}/>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )

}

export { MyAccount }
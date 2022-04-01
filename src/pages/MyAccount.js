import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { Fragment, useState } from 'react';
import { Update } from '../components';
import account from '/src/_assets/css/modules/myaccount.module.css';
import { userService } from '../services';
import { dateFormat } from '../constants';
import { useFetch } from '../services/fetch';

const MyAccount = () => {

    const router = useRouter()
    const { data: info } = useFetch(`/usuario/username/${userService.userValue.username}`, false, 0)
    
    const [ updateAccount, setUpdateAccount ] = useState(null)

    const AccountUpdate = ({ 
        item, 
        label, 
        value }) => (
        <Fragment>
            <span>{value == '' ? '-' : value}</span>
            <span onClick={() => setUpdateAccount({
                title: label, 
                key: item,
                value: value
            })}
            className={account.button_change}>
                {value == '' ? 'Adicionar' : 'Alterar'} {label} <i className="bi bi-pen-fill"></i>
            </span>
        </Fragment>
    )

    if (updateAccount != null) {
        return <Update item={updateAccount} updateAccount={setUpdateAccount}/>
    }
    
    return (
        <div className="col-12">

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
                            value={info?.details.email}
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
                            value={`${dateFormat(info?.details.birthday, true)}`}
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
                            value={info?.details.name}
                            label={'Nome'}/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Telefone</span>
                            <AccountUpdate 
                            item='phone' 
                            value={info?.details.phone}
                            label={'Telefone'}/>
                        </div>
                    </div>

                    <span className={account.title_box}>Endereço</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Endereço</span>
                            <AccountUpdate 
                            item='address' 
                            value={info?.location.address}
                            label={'Endereço'}/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Código postal</span>
                            <AccountUpdate 
                            item='cep' 
                            value={info?.location.postalCode}
                            label={'CEP'}/>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )

}

export { MyAccount }
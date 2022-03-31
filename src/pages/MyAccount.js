import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { Fragment, useEffect, useState } from 'react';

import account from '/src/_assets/css/modules/myaccount.module.css';
import { userService } from '../services';
import { API } from '../constants';
import { useFetch } from '../services/fetch';

const MyAccount = () => {

    const router = useRouter()

    const { data: info } = useFetch(`/usuario/username/${userService.userValue.username}`)
    
    const [ updateAccount, setUpdateAccount ] = useState(null)

    const ButtonAccountUpdate = ({ item, add }) => (
        <span 
        onClick={() => setUpdateAccount(item)}
        className={account.button_change}>
            {add != undefined ? 'Adicionar' : 'Alterar'} {item} <i className="bi bi-pen-fill"></i>
        </span>
    )

    console.log(info)

    return (
        <div className="col-12">

            <div className="row mb-3">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <span className={account.title_box}>Financeiro</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            {userService.getAllCards().length > 0 ? userService.getAllCards().map((card) => {
                                const cardDecrypt = JSON.parse(userService.decrypt(card))
                                if (cardDecrypt.username == userService.userValue.username) {
                                    return (
                                        <Fragment>
                                            <span className={account.subtitle}>Cartão de crédito</span>
                                            <span>{cardDecrypt.flag} **** {cardDecrypt.nr.split(' ')[3]}</span>
                                        </Fragment>
                                    )
                                }
                            }) : (
                                <Fragment>
                                    <span className={account.subtitle}>Cartão de crédito</span>
                                    <span>Nenhum</span>
                                </Fragment>
                            )}
                            <ButtonAccountUpdate item='cards' add={!userService.getAllCards().length > 0}/>
                        </div>
                    </div>
                    <span className={account.title_box}>Informações de acesso</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Nome de usuário</span>
                            <span>@{userService.userValue.username}</span>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>E-mail</span>
                            <span>email@email.com</span>
                            <ButtonAccountUpdate item='e-mail'/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Senha</span>
                            <span>********</span>
                            <ButtonAccountUpdate item='senha'/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Data de nascimento</span>
                            <span>Data</span>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <span className={account.title_box}>Informações pessoais</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Nome</span>
                            <span>Nome Aqui</span>
                            <ButtonAccountUpdate item='nome'/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Telefone</span>
                            <span>Telefone</span>
                            <ButtonAccountUpdate item='telefone'/>
                        </div>
                    </div>

                    <span className={account.title_box}>Endereço</span>
                    <div className={account.item}>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Endereço</span>
                            <span>R. address...</span>
                            <ButtonAccountUpdate item='address'/>
                        </div>
                        <div className={account.item_account}>
                            <span className={account.subtitle}>Código postal</span>
                            <span>000000</span>
                            <ButtonAccountUpdate item='cep'/>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )

}

export { MyAccount }
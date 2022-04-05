import { LayoutStatic, Footer } from '/src/containers';

import { Login, Register } from '../../src/components/Session';
import { useEffect, useState } from 'react';

import form from '/src/_assets/css/modules/form.module.css';
import getCookie from '../../src/constants/getCookie';
import { userService } from '../../src/services';

const Access = () => {

    const [ authorized, setAuthorized ] = useState(false)
    const [ thereIsAccount, setThereIsAccount ] = useState(true)

    const ManageFinish = () => {
        if (thereIsAccount) {
            return (
                <Login thereIsAccount={setThereIsAccount} setAuthorized={setAuthorized}>
                    <h6>Bem vindo!</h6>
                    <h2>Acesse sua conta</h2>
                </Login>
            )
        }
        return (
            <Register thereIsAccount={setThereIsAccount} setAuthorized={setAuthorized}>
                <h6>Bem vindo!</h6>
                <h2>Crie sua conta</h2>
            </Register>
        )
    }

    if (authorized) {
        window.location.replace('/')
    }

    useEffect(() => {
      if (getCookie('_SESSION') || userService.userValue) {
        window.location.replace('/')
      }
    }, [])

    return (
        <LayoutStatic breadcrumbLabel="Sou paciente" breadcrumb={false}>

            <div className={form.box_form_flex}>
                <div className={form.form}>
                    <ManageFinish/>
                </div>
            </div>

            <Footer />
        </LayoutStatic>
    )
    
}

export default Access
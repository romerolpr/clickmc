import { LayoutStatic, Footer } from '/src/containers';

import { Login, Register } from '../../src/components/Session';
import { useState, useEffect } from 'react';

import form from '/src/_assets/css/modules/form.module.css';
import getCookie from '../../src/constants/getCookie';
import { useRouter } from 'next/router';

const Medico = () => {

    const router = useRouter()
    const [ thereIsAccount, setThereIsAccount ] = useState(true)

    const ManageFinish = () => {
        if (thereIsAccount) {
            return (
                <Login thereIsAccount={setThereIsAccount} redirect={true}>
                    <h6>Médico</h6>
                    <h2>Faça login no painel</h2>
                </Login>
            )
        }
        return (
            <Register thereIsAccount={setThereIsAccount} redirect={true}>
                <h6>Médico</h6>
                <h2>Crie sua conta</h2>
            </Register>
        )
    }

    useEffect(() => {
      if (getCookie('_SESSION')) {
        router.push('/')
      }
    }, [])

    return (
        <LayoutStatic breadcrumbLabel="Sou médico" breadcrumb={false}>

            <div className={form.box_form_flex}>
                <div className={form.form}>
                    <ManageFinish/>
                </div>
            </div>

            <Footer />
        </LayoutStatic>
    )
    
}

export default Medico
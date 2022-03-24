import { LayoutStatic, Footer } from '/src/containers';

import { Login, Register } from '../../src/components/Session';
import { useEffect, useState } from 'react';

import form from '/src/_assets/css/modules/form.module.css';
import getCookie from '../../src/constants/getCookie';
import { useRouter } from 'next/router';
import { userService } from '../../src/services';

const Paciente = () => {

    const router = useRouter()
    const [ thereIsAccount, setThereIsAccount ] = useState(true)

    const ManageFinish = () => {
        if (thereIsAccount) {
            return (
                <Login thereIsAccount={setThereIsAccount} redirect={true}>
                    <h6>Paciente</h6>
                    <h2>Faça login na sua conta</h2>
                </Login>
            )
        }
        return (
            <Register thereIsAccount={setThereIsAccount} redirect={true}>
                <h6>Paciente</h6>
                <h2>Crie sua conta</h2>
            </Register>
        )
    }

    useEffect(() => {
      if (getCookie('_SESSION') || userService.userValue) {
        router.push('/')
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

export default Paciente
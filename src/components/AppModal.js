import modal from '/src/_assets/css/modules/appModal.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { LayoutForm } from '../containers';

const AppModal = () => {

    const [ show, setShow ] = useState(true)
    const router = useRouter()

    const handleClose = () => {
        setShow(false)
        router.push({ pathname: '/' })
    }

    const keyPress = (e) => {
        if (e.key === "Escape") {
            handleClose()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPress, false)
        return () => {
            document.removeEventListener('keydown', keyPress, false)
        }
    }, [])

    return (
        <div className={`${modal.container}`}>

            <div className={show ? `${modal.window} ${modal.open}` : `${modal.window}`}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className={`${modal.closeDiv}`}>
                        <h2>Informe sua localização</h2>
                        <span onClick={handleClose} className={`${modal.closeButton}`}>&times;</span>
                    </div>

                    <LayoutForm>
                        <p>Form</p>
                    </LayoutForm>

                </div>
            </div>

        </div>
    )

}

export { AppModal }
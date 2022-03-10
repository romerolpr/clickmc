import modal from '/src/_assets/css/modules/appModal.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
            <div className={`${modal.title}`}>
                <h2>Buscar especialista por perto</h2>
            </div>
            <div className={show ? `${modal.window} ${modal.open}` : `${modal.window}`}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span onClick={handleClose} className={`${modal.closeButton}`}>&times;</span>
                </div>
            </div>
        </div>
    )

}

export { AppModal }
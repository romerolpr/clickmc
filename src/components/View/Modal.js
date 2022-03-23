import { Button, Modal } from 'react-bootstrap';
import { useRouter } from 'next/router';

export const ModalNext = ({ modalShow, title, children }) => {
    
    const router = useRouter()

    const handleClose = () => {
        router.push({ pathname: '/' })
    }

    return (
        <>
        <Modal
            show={modalShow}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                { children }

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
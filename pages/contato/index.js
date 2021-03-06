import { LayoutStatic, Footer } from '../../src/containers';

import styles from '/src/_assets/css/modules/accompany.module.css';

const Contato = () => {
    return (
        <LayoutStatic breadcrumb={false}>
            <div className={styles.container_scheduling}>
                <div className={styles.top_scheduling}>
                    <h2>Entre em contato conosco</h2>
                    <p>Envie sua mensagem pelo nossos formulário de contato.</p>
                </div>
                <div className={styles.body_scheduling_p}>
                    <p>componente do form de contato...</p>
                </div>
            </div>
            <Footer />
        </LayoutStatic>
    )
}

export default Contato
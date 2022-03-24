import { LayoutStatic, Footer } from '/src/containers';

import styles from '/src/_assets/css/modules/accompany.module.css';

const Notifications = () => {
    return (
        <LayoutStatic breadcrumb={false}>
            <div className={styles.container_scheduling}>
                <div className={styles.top_scheduling}>
                    <h2>Suas notificações</h2>
                    <p>Navegue pelas suas notificações recebidas ou pelo seu registro de atividades recente.</p>
                </div>
                <div className={styles.body_scheduling_p}>
                    <p>componente das notificações...</p>
                </div>
            </div>
            <Footer />
        </LayoutStatic>
    )
}

export default Notifications
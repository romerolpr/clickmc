import { LayoutStatic, Footer } from '../../src/containers';
import { userService } from '../../src/services';

import styles from '/src/_assets/css/modules/accompany.module.css';

const Perfil = () => {
    return (
        <LayoutStatic breadcrumb={false}>
            <div className={styles.container_scheduling}>
                <div className={styles.top_scheduling}>
                    <h2>Olá, {userService.userValue.username}!</h2>
                    <p>Visualize e edite as informações da sua conta por aqui.</p>
                </div>
                <div className={styles.body_scheduling_p}>
                    <p>componente do perfil do usuário...</p>
                </div>
            </div>
            <Footer />
        </LayoutStatic>
    )
}

export default Perfil
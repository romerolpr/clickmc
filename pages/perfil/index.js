import { LayoutStatic, Footer } from '../../src/containers';
import { userService } from '../../src/services';

import styles from '/src/_assets/css/modules/accompany.module.css';
import perfil from '/src/_assets/css/modules/perfil.module.css';

import { Image } from '../../src/components';

import { identifySession } from '../../src/constants/session/identifySession';

const Perfil = () => {

    identifySession()

    return (
        <LayoutStatic breadcrumb={false}>
            <div className={perfil.item_center}>
              <div className={perfil.item_box_icon}>
                <div className={perfil.img_box}>
                  <Image imageSrc={'/image/avatar/default.png'} title={'Seu avatar'}/>
                </div>
                <div className={perfil.text_name}>
                  <span>Alterar avatar</span>
                </div>
              </div>
            </div>
            <div className={styles.container_scheduling} style={{ marginTop: '0' }}>
                <div className={styles.top_scheduling}>
                    <h2>Olá, {userService.userValue ? userService.userValue.username : null}!</h2>
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
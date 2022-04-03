import { LayoutStatic, Footer } from '../../src/containers';
import { userService } from '../../src/services';

import styles from '/src/_assets/css/modules/accompany.module.css';
import perfil from '/src/_assets/css/modules/perfil.module.css';

import { Image } from '../../src/components';
import { MyAccount } from '../../src/pages';
import { identifySession } from '../../src/constants/session/identifySession';
import { useRedux } from '../../src/services/fetch'

const Perfil = () => {

    identifySession()
    const { userValues } = useRedux()

    return (
        <LayoutStatic breadcrumb={false}>
            <div className={perfil.item_center}>
              <div className={perfil.item_box_icon}>
                <div className={perfil.img_box}>
                  <Image imageSrc={`/${userValues.avatar}`} title={'Seu avatar'}/>
                </div>
                <div className={perfil.text_name}>
                  <span>Alterar avatar</span>
                </div>
              </div>
            </div>
            <div className={styles.container_scheduling} style={{ marginTop: '0' }}>
                <div className={styles.top_scheduling}>
                    <h2>Olá, @{userService.userValue ? userService.userValue.username : null}!</h2>
                    <p>Visualize e edite as informações da sua conta por aqui.</p>
                </div>
                <div className={styles.body_scheduling_p}>
                    <MyAccount />
                </div>
            </div>
            <Footer />
        </LayoutStatic>
    )
}

export default Perfil
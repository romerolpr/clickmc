import { useFetch } from "../../services/fetch";

import styles from '/src/_assets/css/modules/accompany.module.css';
import { Loading } from "../View/Loading";

import { ListOptions } from ".";
import { userService } from "../../services";

const Many = () => {

    const { data: hist } = useFetch(`/status/user/${userService.userValue?.username}`, false)

    if ( hist == null ) {
      return (
          <div className={styles.container_scheduling}>
              <div className={styles.top_scheduling}>
                  <h2>Buscando seus dados...</h2>
                  <p>Estamos verificando seus agendamentos anteriores, por favor aguarde.</p>
              </div>
              <div className={styles.body_scheduling_p}>
                <Loading label={false}/>
              </div>
          </div>
      )
    }

    if ( hist.schedules.length == 0 ) {
        return (
          <div className={styles.container_scheduling}>
              <div className={styles.top_scheduling}>
                  <h2>Nenhuma consulta foi agendada</h2>
                  <p>Parece que você ainda não realizou nenhuma consulta.</p>
              </div>
              <div className={styles.body_scheduling_p}>
                  <p>componente para médicos sugeridos...</p>
              </div>
          </div>
      )
    }

    return <ListOptions items={hist?.schedules} />

}

export { Many }
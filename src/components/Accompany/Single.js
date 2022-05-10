import { useRouter } from "next/router";
import { useFetch } from "../../services/fetch";

import styles from '/src/_assets/css/modules/accompany.module.css';
import { Loading } from "../View/Loading";

import { Informations } from ".";

const Single = () => {

    const router = useRouter()
    const { urlCode } = router.query

    const { data: hist } = useFetch(`status/urlCode/${urlCode}`)
    
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

    if ( 
        hist.item != undefined && hist.item.length == 0 || 
        hist.schedules != undefined && hist.schedules.length == 0 ) {
        return (
            <div className={styles.container_scheduling}>
                <div className={styles.top_scheduling}>
                    <h2>Nenhuma consulta foi agendada</h2>
                    <p>Parece que você ainda não realizou nenhuma consulta.</p>
                </div>
                <div className={styles.body_scheduling_p}>
                    <div className="col-12">
                        {MEDICAL_ACCOUNT_LEVEL != userService.userValue._type ? (
                        <p>Agende uma consulta com um especialista de sua preferência, e receba-o em sua residência.</p>
                        ) : (
                        <p>Melhore seu perfil para atrair novos pacientes a sua lista. (<strong>1/6 Conquistas de perfil</strong>)</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return <Informations item={hist} />

}

export { Single }
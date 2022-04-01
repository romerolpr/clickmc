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

    return <Informations item={hist} />

}

export { Single }
import { useFetch } from "../../services/fetch";

import styles from '/src/_assets/css/modules/accompany.module.css';
import { Loading } from "../View/Loading";

import { ListOptions } from ".";
import { userService } from "../../services";

const Many = () => {

    const { data: hist } = useFetch(`/status/user/${userService.userValue.username}`, false)

    if ( hist == null ) {
        return (
            <div className={styles.container_scheduling}>
                <Loading />
            </div>
        )
    }

    if ( hist.schedules.length == 0 ) {
        return (
            <div className={styles.container_scheduling}>
                <div className="col-md-12">
                    <h2>Oops!</h2>
                    <p>Você ainda não realizou nenhuma consulta ainda.</p>
                </div>
            </div>
        )
    }

    return < ListOptions  items={hist?.schedules} />

}

export { Many }
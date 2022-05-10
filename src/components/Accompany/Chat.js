import { Fragment, useState, useEffect } from "react"
import { getByStatus, dateFormat, API } from "../../constants"

import styles from '/src/_assets/css/modules/accompany.module.css';
import { toast } from "react-toastify"
import { useRouter } from "next/router"; 

const Chat = ({ 
    status,
    name,
    datetime,
    categoryId
 }) => {

    const router = useRouter()

    const [ category, setCategory ] = useState(null)

    useEffect(() => {

        API.get(`/usuario/m/categoria/${categoryId}`)
        .then( res => {
            if (res.data.user != undefined) {
                const response = res.data.user[0]
                if (response.status != 400) {
                    setCategory(response.title)
                }
            }
        })
        .catch( err => toast.error('Não foi possível obter a categoria') )

    }, [])

    return (
        <Fragment>
            <span className={`${styles.list_schedule} ${styles.left_side} ${styles.expand_item}`}>
                <span className={`${styles.icon_schedule} ${styles.status_schedule}`}><strong>Status</strong></span>
                <span className={`${styles.info_schedule}`} style={{fontStyle: 'italic'}}>{getByStatus(status).text}</span>
            </span>
            <span className={`${styles.list_schedule} ${styles.left_side}`}>
                <span className={`${styles.icon_schedule}`}><i className="bi bi-upc"></i> <strong>Código de acompanhamento</strong></span>
                <span style={{textTransform: 'UPPERCASE'}} className={`${styles.info_schedule}`}>{router.query.urlCode}</span>
            </span>
            <span className={`${styles.list_schedule} ${styles.left_side}`}>
                <span className={`${styles.icon_schedule}`}><i className="bi bi-calendar-check-fill"></i> <strong>Data e hora</strong></span>
                <span className={`${styles.info_schedule}`}>{ dateFormat(datetime) } às {new Date(datetime).toLocaleTimeString()}</span>
            </span>
            <span className={`${styles.list_schedule} ${styles.left_side}`}>
                <span className={`${styles.icon_schedule}`}><i className="bi bi-person-fill"></i> <strong>Doutor</strong></span>
                <span className={`${styles.info_schedule}`}>{name}</span>
            </span>
            <span className={`${styles.list_schedule} ${styles.left_side}`}>
                <span className={`${styles.icon_schedule}`}><i className="bi bi-bookmark-star-fill"></i> <strong>Categoria</strong></span>
                <span style={{textTransform: 'capitalize'}} className={`${styles.info_schedule}`}>
                    { category }
                </span>
            </span>
      </Fragment>
    )

}

export { Chat }
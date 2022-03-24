import styles from '/src/_assets/css/modules/accompany.module.css';
import { getByStatus } from "../../constants";
import { weekdays, months } from "../../constants";

import { useRouter } from 'next/router';

const ListOptions = ({ items }) => {

    const router = useRouter()

    const _label = (appointment) => {
        const date = new Date(appointment?.date)
        const weekday = weekdays[date.getDay()] ? weekdays[date.getDay()] : '[invalid date]'
        const time = appointment.time
        return `solicitado para ${weekday}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()} às ${time}`
    }
    
    const _filter = (status) => {
        switch (status) {
            case 1:
            case 2:
                return false
            default:
                return true
        }
    }

    return (
        <div className={styles.container_scheduling}>
            <div className={styles.top_scheduling}>
              <h2>Agendamentos anteriores</h2>
              <p>Selecione uma consulta para visualizar maiores informações e abrir e status pelo médico especialista.</p>
            </div>
            <div className={styles.body_scheduling}>
              {items.map( value => {
                const appointment = JSON.parse(value.appointment)
                return (
                    <div className={styles.list_schedulingDay}>
                        <div className={styles.scheduling_day} onClick={() => {
                            router.push({
                                pathname: '/acompanhar', 
                                query: { urlCode: value.urlCode }
                            })
                        }} style={{
                                filter: _filter(value.status) && 'opacity(50%)'
                            }}>
                            <div className={`${styles.icon_day} ${styles.view_list}`} style={{
                                backgroundImage: `url(/${value.medicalDetails.backdrop})`
                            }}>
                                {/* <span style={{visibility: 'hidden'}}><i className="bi bi-eye"></i></span> */}
                            </div>
                            <div className={styles.infor_day}>
                                <p><span className={styles.status_day}>{value.urlCode}</span> <span className={styles.text_urlCode}>{getByStatus(value.status).text}</span></p>
                                <p className={styles.text_title}><strong>Dr. {value.medicalDetails.name}</strong></p>
                                <p><span className={styles.text_list}><i className="bi bi-check2"></i> {_label(appointment)}</span></p>
                            </div>
                        </div>
                    </div>
              )})}
            </div>
        </div>
    )
}

export { ListOptions }
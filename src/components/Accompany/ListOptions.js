import styles from '/src/_assets/css/modules/accompany.module.css';
import { weekdays, months, getByStatus } from "../../constants";

import { useRouter } from 'next/router';
import { MEDICAL_ACCOUNT_LEVEL } from '../../_settings/_auth';
import { userService } from '../../services';
import { listOptionsInformations } from '../../constants/listOptionsInformations';

const ListOptions = ({ items }) => {

    const router = useRouter()

    const _label = (appointment) => {
        const datetime = [appointment.date, appointment.time].join(' ')
        const date = new Date(datetime)
        const weekday = weekdays[date.getDay()] ? weekdays[date.getDay()] : '[invalid date]'
        const time = appointment.time
        return `solicitado para ${weekday}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()} às ${date.toLocaleTimeString()}`
    }

    const title = MEDICAL_ACCOUNT_LEVEL == userService.userValue._type ? 'Próximas consultas' : 'Seus agendamentos'
    
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
              <h2>{title}</h2>
              <p>Selecione uma consulta para visualizar maiores informações e seu status.</p>
            </div>
            <div className={styles.body_scheduling}>
              {items.map( value => {
                const informations = listOptionsInformations(value)
                return (
                    <div className={styles.list_schedulingDay}>
                        <div className={styles.scheduling_day} onClick={() => {
                            router.push({
                                pathname: '/acompanhar', 
                                query: { urlCode: informations.urlCode }
                            })
                        }} style={{
                                filter: _filter(informations.status) && 'opacity(50%)'
                            }}>
                            <div className={`${styles.icon_day} ${styles.view_list}`} style={{
                                backgroundImage: `url(/${informations.getBackdrop()})`
                            }}>
                                {/* <span style={{visibility: 'hidden'}}><i className="bi bi-eye"></i></span> */}
                            </div>
                            <div className={styles.infor_day}>
                                <p><span className={styles.status_day}>{informations.urlCode}</span> <span className={styles.text_urlCode}>{getByStatus(informations.status).text}</span></p>
                                <p className={styles.text_title}><strong>{informations.getName()}</strong></p>
                                <p><span className={styles.text_list}><i className="bi bi-check2"></i> {_label(value.appointment)}</span></p>
                            </div>
                        </div>
                    </div>
              )})}
            </div>
        </div>
    )
}

export { ListOptions }
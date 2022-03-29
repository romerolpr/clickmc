import styles from '/src/_assets/css/modules/accompany.module.css';
import { API_URI } from '../../_settings';
import { userService } from '../../services';

const Message = ({
    item,
    type
}) => {

    const _className = item.userId != userService.userValue.username ? styles.left_side : styles.right_side

    switch (type) {
        case 'doc':
            return (
                <span className={`${styles.list_schedule} ${styles.list_document} ${styles.docDdf} ${_className}`}>
                    <span className={styles.document_schedule}>
                        <span className={styles.pdf_icon}></span>
                        <span className={styles.info_document}>{item.title}</span>
                        <a href={`${API_URI}/${item.path}`} title={item.title} target="_blank" rel="nofollow">
                            <span className={styles.download_icon}>
                                <i class="bi bi-arrow-down-circle"></i>
                            </span>
                        </a>
                    </span>
                    <span className={styles.info_schedule_time}><span className="time-text">{new Date(item.time).toLocaleTimeString()}</span></span>
                </span>
            )
        case 'img':
            return (
                <span className={`${styles.list_schedule} ${styles.list_document} ${styles.docDdf} ${_className}`}>
                    <span className={styles.photo_schedule}>
                        <img src={`${API_URI}/${item.path}`} alt={item.title} title={item.title}/>
                    </span>
                    <span className={styles.info_schedule}>{item.title}</span>
                </span>
            )
        default:
            return (
                <span className={`${styles.list_schedule} ${styles.list_document} ${styles.docDdf} ${_className}`}>
                    <span class={styles.info_schedule}>
                        <span>{item.title}</span>
                        <span class={styles.info_schedule_time}><span className="time-text">{new Date(item.time).toLocaleTimeString()}</span></span>
                    </span>
                </span>
            )
    }
}

export { Message }
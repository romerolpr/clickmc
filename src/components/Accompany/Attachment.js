import { Fragment, useState, useEffect } from "react"
import { getByStatus, dateFormat, API } from "../../constants"

import styles from '/src/_assets/css/modules/accompany.module.css';

import { userService } from "../../services";
import { useFetch } from "../../services/fetch";

const Attachment = ({ 
    urlCode
 }) => {

    const [ attachment, setAttachment ] = useState(null)
    const { data: prev } = useFetch(`/upload/urlCode/${urlCode}`)

    const DocumentByType = item => {

        const _className = item.userId != userService.userValue.username ? "left-side" : "right-side"

        switch (item) {
            case 'application/pdf':
            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            case 'application/vnd.oasis.opendocument.text':
            case 'application/vnd.oasis.opendocument.spreadsheet':
                return (
                    <span className={`${styles.list_schedule} ${styles.list_document} ${styles.docDdf} ${_className}`}>
                        <span className="document_schedule">
                            <span className="pdf_icon"></span>
                            <span className="info_document">{item.title}</span>
                            <a href={`http://192.168.0.11:8080/${item.path}`} title={item.title} target="_blank" rel="nofollow">
                                <span className="download-icon">
                                    <i class="bi bi-arrow-down-circle"></i>
                                </span>
                            </a>
                        </span>
                        <span className="info-schedule_time"><span className="time-text">{new Date(item.time).toLocaleTimeString()}</span></span>
                    </span>
                )

            case 'image/jpeg':
            case 'image/png':
            case 'image/bmp':
            case 'image/gif':
            case 'image/webp':
                return '...'
            default:
                return '...'
        }

    }

    useEffect(() => {

        if (prev != null) {
            setAttachment(prev)
        }

    }, [])

    if (attachment == null ) 
        return <span className={`${styles.list_schedule} ${styles.list_empty}`}>Você não possui histórico recente com este especialista.</span>

    return (
        <Fragment>
            
        </Fragment>
    )

}

export { Attachment }
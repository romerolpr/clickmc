import { Fragment, useState, useEffect } from "react"

import styles from '/src/_assets/css/modules/accompany.module.css';

import { userService } from "../../services";
import { useFetch } from "../../services/fetch";
import { API_URI } from "../../_settings";

import { Message } from "../";

const Attachment = ({ 
    urlCode
 }) => {

    const [ attachment, setAttachment ] = useState(null)
    const { data: prev } = useFetch(`/upload/urlCode/${urlCode}`)

    const DocumentByType = ({ item }) => {

        const _className = item.userId != userService.userValue.username ? "left-side" : "right-side"

        switch (item) {
            case 'application/pdf':
            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            case 'application/vnd.oasis.opendocument.text':
            case 'application/vnd.oasis.opendocument.spreadsheet':
                return <Message item={item} type='documents' />
            case 'image/jpeg':
            case 'image/png':
            case 'image/bmp':
            case 'image/gif':
            case 'image/webp':
                return <Message item={item} type='images' />
            default:
                return <Message item={item} />
        }

    }

    useEffect(() => {

        if (prev != null) {
            setAttachment(prev?.items)
        }

        console.log(attachment)

    }, [])

    if (attachment == null ) 
        return <p className={`${styles.list_schedule} ${styles.list_empty}`} >Você não possui histórico recente com este especialista.</p>

    return (
        <Fragment>
            { attachment.map( item => <DocumentByType item={ item }/> ) }
        </Fragment>
    )

}

export { Attachment }
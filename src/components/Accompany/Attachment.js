import { Fragment, useState, useEffect } from "react";

import { useFetch } from "../../services/fetch";
import { API } from "../../constants";
import { Message } from "../";
import { toast } from "react-toastify";

import styles from '/src/_assets/css/modules/accompany.module.css';

const Attachment = ({ urlCode }) => {

    const [ attachment, setAttachment ] = useState(null)
    const { data: prev } = useFetch(`/upload/urlCode/${urlCode}`)

    const DocumentByType = ({ item }) => {

        switch (item.filetype) {
            case 'application/pdf':
            case 'application/msword':
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            case 'application/vnd.oasis.opendocument.text':
            case 'application/vnd.oasis.opendocument.spreadsheet':
                return <Message item={item} type='doc' />
            case 'image/jpeg':
            case 'image/png':
            case 'image/bmp':
            case 'image/gif':
            case 'image/webp':
                return <Message item={item} type='img' />
            default:
                return <Message item={item} />
        }

    }

    useEffect(() => {

        API.get(`/upload/urlCode/${urlCode}`)
        .then( response => {
            if (response.status != 204) {
                setAttachment(response.data?.items)
            }
        })
        .catch( error => {
            console.error(error)
            toast.error('Falha ao recuperar os aquivos')
        })

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
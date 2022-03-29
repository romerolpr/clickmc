import React, {Fragment, useEffect, useState} from 'react';
import { userService } from '../../services';
import { useRouter } from 'next/router';

import { Button } from 'react-bootstrap';

import { API } from '../../constants';

import styles from '/src/_assets/css/modules/accompany.module.css';
import { API_URI } from '../../_settings';
import { toast } from 'react-toastify';

const FileUpload = () => {

	const [ selectedFile, setSelectedFile ] = useState()
	const [ isFilePicked, setIsFilePicked ] = useState(false)

    const [ occurredError, setOccurredError ] = useState(false)

    const router = useRouter()

    useEffect(() => {
        handleOccurredError()
    }, [])

    const insertDocument = (fileName, pathName) => {

        const divAfter = document.querySelector(styles.body_scheduling_p)

        const span = document.createElement('span');
        const infoDocument = document.createElement('span')
        const time = document.createElement('span')
        const divDoc = document.createElement('span')
        const pdfIcon = document.createElement('span')
        const downloadIcon = document.createElement('span')
        const content = document.createElement('span')

        span.className = `${styles.list_schedule} ${styles.list_document} ${styles.right_side}`
        downloadIcon.className = styles.download_icon
        pdfIcon.className = styles.pdf_icon
        divDoc.className = styles.document_schedule
        infoDocument.className = styles.info_document
        time.className = styles.info_schedule_time
        content.className = styles.document_contents
        
        time.innerHTML = `<span class="time-text">${new Date().toLocaleTimeString()}</span>`
        downloadIcon.innerHTML = `
        <a href="${API_URI}/${pathName}" title="${fileName}" download target="_blank">
            <i class="bi bi-arrow-down-circle"></i>
        </a>`
        infoDocument.innerText = fileName
        infoDocument.title = fileName

        content.appendChild(pdfIcon)
        content.appendChild(infoDocument)
        content.appendChild(downloadIcon)

        divDoc.appendChild(content)
        span.appendChild(divDoc)
        span.appendChild(time)

        divAfter.appendChild(span)

        const contentIsEmpty = document.querySelector(`.${styles.list_empty}`)
        if (contentIsEmpty != undefined) {
            contentIsEmpty.style.display = 'none'
        }

    }

    const fileFilter = type => {
        const typeAllowed = [ 'jpeg', 'png', 'bmp', 'gif', 'webp', 'pdf', 'doc', 'docx', 'odt', 'ods', '7z', 'zip' ]
        const mimetypeAllowed = [ 'image/jpeg','image/png','image/bmp','image/gif','image/webp','application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.oasis.opendocument.text','application/vnd.oasis.opendocument.spreadsheet','application/x-7z-compressed','application/zip' ]
        for (var i = 0; i <= mimetypeAllowed.length; i++) {
            if (type == mimetypeAllowed[i] || type == typeAllowed[i]) {
                return true
            }
        }
        return false
    }

    const textAbstract = (text, length) => {
        const nameFile = text.split('.')[0]
        const extensionFile = text.split('.')[1]
        return text.length >= length ? nameFile.split('', length).reduce((o, c) => o.length === length-1 ? `${o}${c}... ` : `${o}${c}` , '') + extensionFile : text
    }

    const handleOccurredError = () => {
        if (occurredError) {
            const divTime = document.querySelectorAll(styles.info_schedule_time)
            for (let item of divTime) {
                const itemTime = item.querySelector('.time-text') ? item.querySelector('.time-text').textContent : undefined
                item.innerHTML = `
                <span class="occurredError">
                    <span class="time-text">${itemTime}</span> <i class="bi bi-exclamation-circle-fill"></i>
                </span>`
            }
        }
    }

	const handleSubmit = () => {

		const formData = new FormData();
        const current = new Date()
        const token = userService.userValue.token

		formData.append('file', selectedFile)
        formData.append('userId', userService.userValue.username)
        formData.append('urlCode', router.query.urlCode)
        // formData.append('time', current.toLocaleTimeString())
        
        if (fileFilter(selectedFile.type) && document.getElementById('fileInput').value != undefined) {
            API.post('/upload/post', formData)
            .then((response) => {
                const file = response.data.file
                insertDocument(file.title, file.path)
                document.getElementById('fileInput').value = ''
                setIsFilePicked(false)
                setSelectedFile(undefined)
            })
            .catch((error) => {
                setOccurredError(true)
                handleOccurredError()
                console.error('Error:', error);
            });
        } else {
            toast.error('Não foi possível enviar o arquivo.')
        }

	}

	return(
        <Fragment>
            <input 
            type="file" 
            id="fileInput" 
            name="file" 
            onChange={e => {
                e.preventDefault()
                setSelectedFile(e.target.files[0])
                setIsFilePicked(true)
            }} 
            style={{display: 'none'}}/>
            <Button
            variant="primary"
            onClick={() => document.getElementById('fileInput').click() }>
                {selectedFile == undefined ? "Clique para adicionar um documento" : textAbstract(selectedFile.name, 20)}
            </Button>
            <Button
            variant="primary"
            onClick={() => handleSubmit()} 
            disabled={!isFilePicked || selectedFile == undefined}
            style={{
                visibility: !isFilePicked || selectedFile == undefined ? 'hidden' : 'visible'
            }}>
                Adicionar
            </Button>
		</Fragment>
	)
}

export { FileUpload }
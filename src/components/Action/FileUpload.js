import React, {useEffect, useState} from 'react';

import { userService } from '../../services';
import { useRouter } from 'next/router';

import { Button } from 'react-bootstrap';

import { API } from '../../constants';

import { Message } from '../View/Message';

export const FileUploadPage = ({ disabled }) => {

	const [ selectedFile, setSelectedFile ] = useState()
	const [ isFilePicked, setIsFilePicked ] = useState(false)
    const [ filesIsError , setFileIsError ] = useState(false)

    const [ occurredError, setOccurredError ] = useState(false)

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	}

    const router = useRouter()

    useEffect(() => {
        handleOccurredError()
    }, [])

    const insertDocument = (fileName, pathName) => {

        const divAfter = document.querySelector('.details--schedule #history--attachment')

        const span = document.createElement('span');
        const infoDocument = document.createElement('span')
        const time = document.createElement('span')
        const divDoc = document.createElement('span')
        const pdfIcon = document.createElement('span')
        const downloadIcon = document.createElement('span')
        const content = document.createElement('span')

        span.className = 'list--schedule list--document doc-pdf right-side list--schedule--added'
        downloadIcon.className = 'download-icon'
        pdfIcon.className = 'pdf--icon'
        divDoc.className = 'document--schedule'
        infoDocument.className = 'info--document'
        time.className = 'info-schedule--time'
        content.className = 'document--contents'
        
        time.innerHTML = `<span class="time-text">${new Date().toLocaleTimeString()}</span>`
        downloadIcon.innerHTML = `
        <a href="http://192.168.0.11:8080/${pathName}" title="${fileName}" download target="_blank">
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

        const contentIsEmpty = document.querySelector('.list--empty')
        if (contentIsEmpty != undefined) {
            contentIsEmpty.style.display = 'none'
        }

    }

    function fileFilter (type) {
        const typeAllowed = [ 'jpeg', 'png', 'bmp', 'gif', 'webp', 'pdf', 'doc', 'docx', 'odt', 'ods', '7z', 'zip' ]
        const mimetypeAllowed = [ 'image/jpeg','image/png','image/bmp','image/gif','image/webp','application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.oasis.opendocument.text','application/vnd.oasis.opendocument.spreadsheet','application/x-7z-compressed','application/zip' ]
        for (var i = 0; i <= mimetypeAllowed.length; i++) {
            if (type == mimetypeAllowed[i] || type == typeAllowed[i]) {
                return true
            }
        }
        return false
    }

    function textAbstract(text, length) {
        const nameFile = text.split('.')[0]
        const extensionFile = text.split('.')[1]
        return text.length >= length ? nameFile.split('', length).reduce((o, c) => o.length === length-1 ? `${o}${c}... ` : `${o}${c}` , '') + extensionFile : text
    }

    const handleOccurredError = () => {
        if (occurredError) {
            const divTime = document.querySelectorAll('.info-schedule--time')
            for (let item of divTime) {
                const itemTime = item.querySelector('.time-text') ? item.querySelector('.time-text').textContent : undefined
                item.innerHTML = `
                <span class="occurredError">
                    <span class="time-text">${itemTime}</span> <i class="bi bi-exclamation-circle-fill"></i>
                </span>`
            }
        }
    }

	const handleSubmission = () => {

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
                if (document.querySelector('.alert--popup-top')) 
                    document.querySelector('.alert--popup-top').style.top = '-100%'
            })
            .catch((error) => {
                setOccurredError(true)
                handleOccurredError()
                console.error('Error:', error);
            });
        } else {
            setFileIsError(true)
        }

	};

	return(
        <>
            {filesIsError && <AlertPopup timer={3000} classIcon="exclamation-square" message="Não foi possível enviar o arquivo com esse formato. Tente novamente." />}
			
            {!disabled && (<>
                <input type="file" name="file" onChange={changeHandler} id="fileInput" style={{display: 'none'}}/>
                <Button.Prev handle={() => { document.getElementById('fileInput').click() }} text={selectedFile == undefined ? "Anexar arquivo" : textAbstract(selectedFile.name, 20)}/>
                <Button.Next handle={handleSubmission} disabled={!isFilePicked || selectedFile == undefined} text="Enviar"/>
            </>)}
            
		</>
	)
}
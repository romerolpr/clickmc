import { useState } from "react"
import { API } from "../../constants";
import { userService } from "../../services";
import styles from '/src/_assets/css/modules/accompany.module.css';

import { Button } from "react-bootstrap";

const SendAlert = ({ medicalId, urlCode }) => {

    const [ occurredError, setOccurredError ] = useState(false)
    const [ reminder, setReminder ] = useState(null)

    const insertNotification = () => {

        const divAfter = document.querySelector(styles.body_scheduling_p)

        const span = document.createElement('span');
        const infoSchedule = document.createElement('span')
        const time = document.createElement('span')

        span.className = `${styles.list_schedule} ${styles.right_side} reminder`
        time.className = styles.info_schedule_time
        infoSchedule.className = styles.info_schedule
        
        time.innerText = new Date().toLocaleTimeString()
        if (divAfter.querySelectorAll('.reminder')) {
            infoSchedule.innerHTML = divAfter.querySelectorAll('.reminder').length == 0 || reminder == 0 ? '<span>Você enviou um lembrete.</span>' : `<span>Você enviou um novo lembrete para ${drName}.</span>`
        }

        infoSchedule.appendChild(time)
        span.appendChild(infoSchedule)

        if (reminder <= 1 && !isCancelated || reminder <= 1 && isExpired) {

            const message = reminder == 0 ? "Você enviou um lembrete." : `Você enviou um novo lembrete para ${drName}.`
            API.post('/notice/post', {
                send: userService.userValue.username,
                receive: medicalId,
                type: reminder,
                content: `{\"message\":\"${message}\",\"urlCode\":\"${urlCode}\"}`
            })
            .then(() => {
                divAfter.appendChild(span)
                const contentIsEmpty = document.querySelector(styles.list_empty)
                if (contentIsEmpty != undefined) {
                    contentIsEmpty.style.display = 'none'
                }
                setReminder(reminder+1)
            })
            .catch(() => {
                setOccurredError(true)
            })

        }

    }

    return (
        <Button
        onClick={() => insertNotification()}
        variant="primary">Enviar lembrete</Button>
    )

}

export { SendAlert }
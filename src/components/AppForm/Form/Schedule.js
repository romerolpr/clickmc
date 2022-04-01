import { Loading } from "../../View/Loading"
import { useRedux } from "../../../services/fetch"
import { isAvailableSchedule } from "../../../services/app/steps/store"
import { nextProgress } from "../nextProgress"
import { useEffect } from "react"
import { API, dateFormat } from "../../../constants"
import { userService } from "../../../services"
import { getUrlCode } from "../../../constants"
import { _setUrlCode } from "../../../store/actions/form"
import { toast } from "react-toastify"
import { ContainerApp } from "../../../containers"
import Link from "next/link"
import { Button } from "react-bootstrap"
import { _resetForm } from "../../../store/actions/form"

const Schedule = () => {

    const { formValues, dispatch } = useRedux()
    
    const { availableMedical, payment, coordinates, manualGeolocation, urlCode, medical, category } = formValues 
    
    const current = new Date()

    useEffect(() => {

        const { isAvailable } = isAvailableSchedule(availableMedical)

        if (isAvailable && urlCode == null) {

            const date = {
                date: availableMedical.datetime.split(' ')[0],
                time: availableMedical.datetime.split(' ')[1]
            }

            const requestPost = {

                medicalId: availableMedical.medical.id,
                appointment: {
                    date: date.date,
                    time: date.time,
                    userId: userService.userValue.username,
                    payment: payment,
                    userAddress: {
                        getCurrentPosition: manualGeolocation == 'getCurrentLocation',
                        position: manualGeolocation == 'getCurrentLocation' ? [coordinates.latitude, coordinates.longitude] : manualGeolocation
                    }
                },
                urlCode: getUrlCode(current),
                datelimit: availableMedical.datetime
            }

            API.post(`disponibilidade/insere`, requestPost)
            .then(res => {
                dispatch(_setUrlCode(res.data?.item.urlCode))
            })
            .catch(err => {
                console.error(err)
                toast.error('Não foi possível realizar o agendamento')
            })

        }

    }, [])

    if (urlCode == null) {
        return <Loading textLabel={'Verificando o horário e realizando agendamento...'} />
    }

    return (
        <ContainerApp current={'Agendamento concluído'}>
            <h2>Parabéns!</h2>
            <p>Você agendou sua consulta com o Dr. {medical}, {category}.</p>
            <br />
            <p>Para acompanhar o processo de agendamento da sua consulta, ou interagir com o médico clique no botão abaixo</p>
            <Link href={`/acompanhar?urlCode=${urlCode}`}>
                <Button variant={'primary'}>Acompanhar agendamento</Button>
            </Link>
            <Button 
            onClick={() => {
                dispatch( _resetForm() )
                nextProgress(dispatch, formValues)
            }}
            variant={'light'} style={{ marginLeft: '.5em' }}>Novo agendamento</Button>
        </ContainerApp>
    )

}

export { Schedule }
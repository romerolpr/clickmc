import { useState } from "react"
import { API } from "../../constants";
import { userService } from "../../services";
import { toast } from 'react-toastify';

import { Button } from "react-bootstrap";

const AcceptRequest = ({ urlCode }) => {

    const [ accepted, setAccepted ] = useState(false)

    const acceptRequest = () => {

      if (accepted !== false) return false

      const requestConfig = {
        headers: { Authorization: `Bearer ${userService.userValue.token}` }
      }
      const request = `/status/request/confirm`

      API.patch(request, {
        status: 2,
        urlCode: urlCode
      }, requestConfig)
      .then((result) => {
        const { data, status } = result
        if ( status == 202 ) {
          toast.success('Você confirmou esta consulta')
          toast.info('O status dessa consulta passou de aguardando para em andamento.')
          setAccepted(true)
        } else {
          toast.error('Não foi possível confirmar esta consulta')
        }
      })
      .catch((error) => console.error(error))

    }

    return (
        <Button
        onClick={() => acceptRequest()}
        variant="primary">Confirmar agendamento</Button>
    )

}

export { AcceptRequest }
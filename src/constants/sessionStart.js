import { userService } from "../services"
import { useState, useEffect } from "react"
import { useRedux } from "../services/fetch"
import { API } from "./createAPI"

import { 
    _setUserId,
    _setUserName,
    _setUserAvatar,
    _setUserEmail,
    _setUserAddress,
    _setUserBirthday,
    _setUserPhone,
    _setUserPostalCode,
    _resetUser,
    _setUserNumber,
    _setUserCounty,
    _setUserPrice,
    _setNetworkStatusConnection
 } from '../store/actions/users'
import { toast } from "react-toastify"

const _session = () => {

    const { userValues, dispatch } = useRedux()
    const [ userData, setUserData ] = useState(null)

    const session = userService.userValue != undefined

    useEffect(() => {

        if (navigator.onLine) {
            dispatch( _setNetworkStatusConnection(true) )
        } else {
            toast.error('Você está offline, verifique sua conexão com a internet.')
            dispatch( _setNetworkStatusConnection(false) )
        }

        if (session && userData == null) {

            API
            .get(`/usuario/username/${userService.userValue.username}`)
            .then( res => {
                const response = res
                if ([200, 202].includes(response.status)) {
                    setUserData(true)
                    response.data.map( user => {
                        dispatch( _setUserId(user.id) )
                        dispatch( _setUserName(user.details.name) )
                        dispatch( _setUserBirthday(user.details.birthday) )
                        dispatch( _setUserAvatar(user.details.backdrop) )
                        dispatch( _setUserPhone(user.details.phone) )
                        dispatch( _setUserEmail(user.details.email) )
                        dispatch( _setUserAddress(user.location.address) )
                        dispatch( _setUserPostalCode(user.location.postalCode) )
                        dispatch( _setUserNumber(user.location.number) )
                        dispatch( _setUserCounty(user.location.county) )
                        dispatch( _setUserPrice(user.medicalDetails.price) )
                    })
                }
            })
            .catch( error => {
                console.error(error)
                toast.error('Falha ao identificar a sua sessão')
            })

        }

        if (!session && userValues.id != null) {
            dispatch( _resetUser() )
        }

    }, [session])

}

export { _session }
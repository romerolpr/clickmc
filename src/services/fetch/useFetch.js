import { useState, useEffect } from "react";

import { API } from "../../constants";
import { toast } from "react-toastify";
import { userService } from "../user.service";

export function useFetch( url, message = true, item, authorization ) {

    const [ data, setData ] = useState(null)

    useEffect(() => {
    
        API.get(url, {
            headers: {
                authorization: `Bearer ${userService.userValue?.token}`
            }
        })
        .then(response => {
            if (response.status != 204) {
                setData(item == undefined ? response.data : response.data[item])
            }
        })
        .catch( () => {
            if ( message ) toast.error('A conexão foi perdida.')
        })

    }, [])

    return { data }

}
import { useState, useEffect } from "react";

import { API } from "../../constants";
import { toast } from "react-toastify";

export function useFetch( url, message = true, item ) {

    const [ data, setData ] = useState(null)

    useEffect(() => {
    
        API.get(url)
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
import { useState, useEffect } from "react";

import { API } from "../../constants";
import { toast } from "react-toastify";

export function useFetch( url, message = true ) {

    const [ data, setData ] = useState(null)

    useEffect(() => {
    
        API.get(url)
        .then(response => {
            setData(response.data)
        })
        .catch( () => {
            if ( message ) toast.error('A conexão foi perdida.')
        })

    }, [])

    return { data }

}
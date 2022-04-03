import { useSelector } from "react-redux";
import { useRedux } from "../../services/fetch";

import { Loading } from '../';
import { useEffect, useState } from 'react';
import { DEVELOPER_MODE, TIMEOUT_CONTENT_LOADED } from "../../_settings";
import { toast } from "react-toastify";

/**
 * Components form
*/
import * as Step from "./Form";

const Main = () => {

    const { formValues, userValues } = useRedux()

    const { progress } = formValues
    
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        
        setTimeout(() => { 
            setLoading(false)
        }, TIMEOUT_CONTENT_LOADED)

    }, [])

    console.log(userValues)
    
    if (loading)
        return <Loading />

    // Inclui o componente por estágio de progresso
    switch (progress) {
        case 0:
            return <Step.Location user={userValues}/>
        case 1:
            return <Step.User user={userValues}/>
        case 2:
            return <Step.Specialist />
        case 3:
            return <Step.Confirm />
        case 4:
            return <Step.Finish />
        default:
            if (DEVELOPER_MODE) 
                toast.info('Nenhum componente foi selecionado')
            return <Loading label={false}/>
    }

}

export { Main }
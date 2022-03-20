import { useSelector } from "react-redux";
import { 
    _setAllowGeolocation, 
    _setManualGeolocation,
    _setSupportGeolocation
} from '../../store/actions/form';

import { Loading } from '../';
import { useEffect, useState } from 'react';
import { DEVELOPER_MODE, TIMEOUT_CONTENT_LOADED } from "../../_settings";
import { toast } from "react-toastify";

/**
 * Components form
*/
import * as Step from "./Form";

const Main = () => {

    const formValues = useSelector( (state) => state.formValues);
    const { progress } = formValues
    
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        
        setTimeout(() => { 
            setLoading(false)
        }, TIMEOUT_CONTENT_LOADED)

    }, [])
    
    if (loading)
        return <Loading />

    // Inclui o componente por estágio de progresso
    switch (progress) {
        case 0:
            return <Step.Location />
        case 1:
            return <Step.User />
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
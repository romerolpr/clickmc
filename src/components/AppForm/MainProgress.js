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
import { 
    Location, 
    User,
    Specialist
} from "./Form";

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
            return <Location />
        case 1:
            return <User />
        case 2:
            return <Specialist />
        case 3:
            return "O componente ainda não foi criado."
        case 4:
            return "O componente ainda não foi criado."
        default:
            if (DEVELOPER_MODE) 
                toast.info('Nenhum componente foi selecionado')
            return <Loading label={false}/>
    }

}

export { Main }
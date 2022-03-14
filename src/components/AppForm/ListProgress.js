import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { identifyProgress } from "../AppForm/nextProgress";

import list from '/src/_assets/css/modules/listProgress.module.css';

const ListProgress = () => {

    const dispatch = useDispatch()

    const formValues = useSelector( (state) => state.formValues)
    const { progress } = formValues

    // const _className = list.list_group_item
    const _className = "list-group-item list-group-item-action c-pointer"

    return (
        <Fragment>
            <div className="list-group">

                <span 
                onClick={() => identifyProgress(dispatch, formValues, 0)}
                className={`${_className} ${progress == 0 && 'active'}`} 
                title="Localização">{formValues.manualGeolocation == ''} Localização</span>

                <span 
                onClick={() => identifyProgress(dispatch, formValues, 1)}
                className={`${_className} ${progress == 1 ? 'active' : formValues.manualGeolocation == null && 'disabled'}`} 
                title={formValues.name == null ? "Você mesmo" : formValues.name}>{formValues.name == null ? "Você mesmo" : `${formValues.name} ${formValues.phone}`}</span>

                <span 
                onClick={() => identifyProgress(dispatch, formValues, 2)}
                className={`${_className} ${progress == 2 ? 'active' : formValues.medical == null && formValues.name == null && 'disabled'}`} 
                title="Categoria de especialista">Categoria de especialista</span>

                <span 
                onClick={() => identifyProgress(dispatch, formValues, 3)}
                className={`${_className} ${progress == 3 ? 'active' : formValues.availableMedical == null && formValues.medical == null && 'disabled'}`} 
                title="Confirmar agendamento">Confirmar agendamento</span>

                <span 
                onClick={() => identifyProgress(dispatch, formValues, 4)}
                className={`${_className} ${progress == 4 ? 'active' : formValues.urlCode == null && formValues.availableMedical == null && 'disabled'}`} 
                title="Finalização">Finalização</span>

            </div>
        </Fragment>
    )
}

export { ListProgress }
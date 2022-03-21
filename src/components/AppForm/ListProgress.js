import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { identifyProgressLink } from "../../constants";

import { userService } from '../../services';

import {
    LOCATION,
    YOU,
    CATEGORY,
    CONFIRM,
    FINISH
} from '../../_settings/form/config';

import styles from '/src/_assets/css/modules/listProgress.module.css';

const ListProgress = () => {

    const dispatch = useDispatch()

    const formValues = useSelector( (state) => state.formValues)

    const { 
        progress,
        coordinates,
        name,
        category,
        availableMedical,
        urlCode
    } = formValues

    // const _className = list.list_group_item
    const _className = "list-group-item list-group-item-action c-pointer"

    return (
        <Fragment>
            <div className="list-group">

                { userService.userValue != undefined && (
                    <span
                    onClick={() => identifyProgressLink(LOCATION, dispatch, formValues)}
                    className={`${_className} ${styles.my_account}`} 
                    title="Minha conta">Olá, <span>{userService.userValue.username}</span></span>
                ) }

                <span
                onClick={() => identifyProgressLink(LOCATION, dispatch, formValues)}
                className={`${_className} ${progress == LOCATION && 'active'}`} 
                title="Localização">{coordinates == ''} Localização</span>

                <span
                onClick={() => identifyProgressLink(YOU, dispatch, formValues)}
                className={`${_className} ${progress == YOU ? 'active' : coordinates == null && 'disabled'}`} 
                title={name == null ? "Você mesmo" : name}>{name == null ? "Você mesmo" : `${name} ${formValues.phone}`}</span>

                <span
                onClick={() => identifyProgressLink(CATEGORY, dispatch, formValues)}
                className={`${_className} ${progress == CATEGORY ? 'active' : name == null && name == category && 'disabled'}`} 
                title="Categoria de especialista">Categoria de especialista</span>

                <span
                onClick={() => identifyProgressLink(CONFIRM, dispatch, formValues)}
                className={`${_className} ${progress == CONFIRM ? 'active' : availableMedical == null && 'disabled'}`} 
                title="Confirmar agendamento">Confirmar agendamento</span>

                <span
                onClick={() => identifyProgressLink(FINISH, dispatch, formValues)}
                className={`${_className} ${progress == FINISH ? 'active' : urlCode == null && 'disabled'}`} 
                title="Finalização">Finalização</span>

            </div>
        </Fragment>
    )
}

export { ListProgress }
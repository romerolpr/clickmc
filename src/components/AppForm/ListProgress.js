import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { _setName } from "../../store/actions/form";

const ListProgress = ({ _step }) => {

    const { progress } = useSelector( (state) => state.formValues);

    return (
        <Fragment>
            <div className="list-group">
                <Link href={'/buscar'}>    
                    <a className="list-group-item list-group-item-action active" title="Localização">Localização</a>
                </Link>
                <Link href={'/buscar?_step=you'}>    
                    <a className="list-group-item list-group-item-action" title="Você mesmo">Você mesmo</a>
                </Link>
                <Link href={'/buscar?_step=category'}>    
                    <a className="list-group-item list-group-item-action disabled" title="Categoria de especialista">Categoria de especialista</a>
                </Link>
                <Link href={'/buscar?_step=select'}>    
                    <a className="list-group-item list-group-item-action disabled" title="Agendamento">Agendamento</a>
                </Link>
                <Link href={'/buscar?_step=finish'}>    
                    <a className="list-group-item list-group-item-action disabled" title="Finalização">Finalização</a>
                </Link>
            </div>
        </Fragment>
    )
}

export { ListProgress }
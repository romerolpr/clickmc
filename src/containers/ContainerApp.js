import { Fragment } from 'react';
import container from '/src/_assets/css/modules/appBreadcrumb.module.css';

import { useSelector, useDispatch } from "react-redux";
import { 
    _updateProgress,
    _setCategory,
    _setMedical
} from '../store/actions/form';

import { nextProgress } from '../components/AppForm/nextProgress';

const ContainerApp = ({ children, pageTitle, current }) => {
    
    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues)
    
    const { progress, category, medical } = formValues

    const handleCategory = () => {
        dispatch( _setCategory(null) )
        dispatch( _setMedical(null) )
        nextProgress(dispatch, formValues)
    }

    return (
        <Fragment>
            <div className={container.breadcrumb}>
                <nav>
                    <ol className="breadcrumb">
                        { progress > 0 && (
                            <li className={`breadcrumb-item ${container.link}`} onClick={() => dispatch( _updateProgress(progress - 1) )}>
                                <i className="bi bi-arrow-left-short"></i> Anterior
                            </li>
                        )}
                        { category != null && (
                            <>
                                <li className={`breadcrumb-item ${container.link}`} 
                                onClick={() => handleCategory()} 
                                onMouseEnter={e => {
                                    e.preventDefault()
                                    e.target.textContent = 'Alterar categoria'
                                }}
                                onMouseLeave={e => {
                                    e.preventDefault()
                                    e.target.textContent = 'Categoria'
                                }}
                                >
                                    Categoria
                                </li>
                                <li className={`breadcrumb-item ${container.not_link}`}>
                                { category }
                                </li>
                            </>
                        )}
                        { medical != null && (
                            <li className={`breadcrumb-item ${container.not_link}`}>
                                { medical }
                            </li>
                        )}
                        <li className="breadcrumb-item active">
                            { current }
                        </li>
                    </ol>
                </nav>
                <h2>{ pageTitle }</h2>
            </div>
            { children }
        </Fragment>
    )
}

export { ContainerApp }
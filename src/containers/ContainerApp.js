import { Fragment } from 'react';
import container from '/src/_assets/css/modules/appBreadcrumb.module.css';

import { useSelector, useDispatch } from "react-redux";
import { 
    _updateProgress,
    _setCategory
} from '../store/actions/form';

const ContainerApp = ({ children, pageTitle, current }) => {
    
    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues)
    
    const { progress, category } = formValues

    return (
        <Fragment>
            <div className={container.breadcrumb}>
                <nav>
                    <ol className="breadcrumb">
                        { progress > 0 && (
                            <li className={`breadcrumb-item ${container.link}`} onClick={() => dispatch( _updateProgress(progress - 1) )}>
                                <i class="bi bi-arrow-left-short"></i> Anterior
                            </li>
                        )}
                        { category != null && (
                            <li className={`breadcrumb-item ${container.link}`} onClick={() => dispatch( _setCategory(null) )}>
                                { category }
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
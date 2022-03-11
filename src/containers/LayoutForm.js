import { useState, useEffect } from 'react';

import form from '/src/_assets/css/modules/layoutForm.module.css';
import modal from '/src/_assets/css/modules/appModal.module.css';

import { ListProgress } from '../components/AppForm';

const LayoutForm = ( { children } ) => {

    const [ step, setStep ] = useState(null)

    return (
        <div className={modal.window_row}>
            <div className={`col-4 ${modal.padding}`}>
                <ListProgress _step={step}/>
            </div>
            <div className={`col-8 ${modal.padding}`}>
                { children }
            </div>
        </div>
    )

}

export { LayoutForm }
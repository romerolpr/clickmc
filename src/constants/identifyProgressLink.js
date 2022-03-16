import { useSelector, useDispatch } from "react-redux";
import { _updateProgress } from "../store/actions/form";

import {
    LOCATION,
    YOU,
    CATEGORY,
    CONFIRM,
    FINISH
} from '../_settings/form/config';

const test = ( dispatch, select, values ) => {
    
    if (select === YOU
        && values.coordinates != null) {
            dispatch( _updateProgress(YOU) )
            return true
        }

    if (select === CATEGORY
        && values.coordinates != null
        && values.name != null
        && values.phone != null) {
            console.log('categ', select)
            dispatch( _updateProgress(CATEGORY) )
            return true
        }

    if (select === CONFIRM
        && values.coordinates != null
        && values.name != null
        && values.phone != null
        && values.category != null
        && values.availableMedical != null) {
            dispatch( _updateProgress(CONFIRM) )
            return true
        }

    if (select === FINISH
        && values.coordinates != null
        && values.name != null
        && values.phone != null
        && values.category != null
        && values.availableMedical != null
        && values.payment != null
        && values.urlCode != null) {
            dispatch( _updateProgress(FINISH) )
            return true
        }

    return false
}

const identifyProgressLink = ( select, dispatch, values, give = false ) => {

    const current = values.progress

    switch ( select ) {

        case LOCATION:
            if (select < current) {
                dispatch( _updateProgress(LOCATION) )
                console.log('selected', select)
            } else {
                test(dispatch, select, values)
            }
            console.log(LOCATION)
            break
        case YOU:
            if (select < current) {
                dispatch( _updateProgress(YOU) )
                console.log('selected', select)
            } else {
                test(dispatch, select, values)
            }
            break
        case CATEGORY:
            if (select < current) {
                dispatch( _updateProgress(CATEGORY) )
                console.log('selected', select)
            } else {
                test(dispatch, select, values)
            }
            console.log(
                values)
            break
        case CONFIRM:
            if (select < current) {
                dispatch( _updateProgress(CONFIRM) )
                console.log('selected', select)
            } else {
                test(dispatch, select, values)
            }
            console.log(CONFIRM)
            break
        case FINISH:
            if (select < current) {
                dispatch( _updateProgress(FINISH) )
                console.log('selected', select)
            } else {
                test(dispatch, select, values)
            }
            console.log(FINISH)
            break
    }

   

}

export { identifyProgressLink }
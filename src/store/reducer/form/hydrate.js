import { HYDRATE } from "next-redux-wrapper";

import { 
    UPDATE_PROGRESS,
    SET_NAME,
    SET_PAYMENT,
    SET_COMPLEMENTARY,
    SET_URLCODE,
    SET_PHONE,
    SET_CITY,
    SET_MEDICAL,
    SET_AVAILABLE_MEDICAL,
    SET_COORDINATES,
    SET_MANUAL_GEOLOCATION,
    RESET_FORM
 } from '../../actions';

// importa o estado inicial default do form
import { initialForm } from "../../../_settings/reducer/initialForm";

const listForm = (state = initialForm, action) => {
  switch (action.type) {
    case HYDRATE:
        return { ...state, ...action.payload.form };
    case UPDATE_PROGRESS:
        return { ...state, progress: action.payload };
    case SET_NAME:
        return {...state, name: action.payload};
    case SET_PAYMENT:
        return {...state, payment: action.payload};
    case SET_COMPLEMENTARY:
        return {...state, complementary: action.payload};
    case SET_URLCODE:
        return {...state, urlCode: action.payload};
    case SET_PHONE:
        return {...state, phone: action.payload};
    case SET_CITY:
        return {...state, city: action.payload};
    case SET_MEDICAL:''
        return {...state, medical: action.payload};
    case SET_AVAILABLE_MEDICAL:
        return {...state, availableMedical: action.payload};
    case SET_COORDINATES:
        return {...state, coordinates: action.payload};
    case SET_MANUAL_GEOLOCATION:
        return {...state, manualGeolocation: action.payload};
    case RESET_FORM:
        return initialForm
    default:
      return state;
  }
}

export default listForm;
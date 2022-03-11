import { 
    SET_SEARCH_MEDICAL,
    SET_ALLOW_GEOLOCATION,
    SET_SUPPORT_GEOLOCATION
} from '../../actions';

// importa o estado inicial default do form
import { settingsForm } from "../../../_settings/reducer/initialForm";

const settingForm = (state = settingsForm, action) => {
  switch (action.type) {
    case SET_SEARCH_MEDICAL:
        return {...state, searchMedical: action.payload};
    case SET_ALLOW_GEOLOCATION:
        return {...state, allowGeolocation: action.payload};
    case SET_SUPPORT_GEOLOCATION:
        return {...state, supportGeolocation: action.payload};
    default:
        return state;
  }
}

export default settingForm;
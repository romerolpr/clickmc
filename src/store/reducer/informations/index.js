import { HYDRATE } from "next-redux-wrapper";

import { 
    SET_PAGE_SUBTITLE
 } from '../../actions';

// importa o estado inicial default do form
import { initialPageInformations } from "../../../_settings/reducer/initialPageInformations";

const listInformations = (state = initialPageInformations, action) => {
  switch (action.type) {
    case HYDRATE:
        return { ...state, ...action.payload.form };
    case SET_PAGE_SUBTITLE:
        return { ...state, subtitle: action.payload };
    default:
      return state;
  }
}

export default listInformations;
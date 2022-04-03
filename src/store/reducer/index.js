import { combineReducers } from "redux";

// importa todos os reducers criados
import settingsReducer from './users/settings';

import userReducer from './users';
import listsReducer from './lists';
import listInformations from "./informations";

import listForm from './form/hydrate';
import settingForm from './form/settings';

// exporta os reducers
export default combineReducers({
    settings: settingsReducer,
    // lists: listsReducer,
    userValues: userReducer,
    formValues: listForm,
    // formSettings: settingForm,
    pageInformations: listInformations
})
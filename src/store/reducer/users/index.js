import { HYDRATE } from "next-redux-wrapper";
import { 
  SET_NETWORK_STATUS_CONNECTION,
  USER_SET_ID,
  USER_SET_NAME,
  USER_SET_BIRTHDAY,
  USER_SET_PHONE,
  USER_SET_AVATAR,
  USER_SET_EMAIL,
  USER_SET_NUMBER,
  USER_SET_COUNTY,
  USER_SET_POSTALCODE,
  USER_SET_ADDRESS,
  USER_RESET } from "../../actions";

// importa o estado inicial default users
import { initialUser } from '../../../_settings/reducer/initialUser';

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user };
    case SET_NETWORK_STATUS_CONNECTION:
      return { ...state, network_status_connection: action.payload }
    case USER_SET_ID:
      return {...state, id: action.payload};
    case USER_SET_NAME:
      return {...state, name: action.payload};
    case USER_SET_BIRTHDAY:
      return {...state, birthday: action.payload};
    case USER_SET_PHONE:
      return {...state, phone: action.payload};
    case USER_SET_EMAIL:
      return {...state, email: action.payload};
    case USER_SET_AVATAR:
      return {...state, avatar: action.payload};
    case USER_SET_ADDRESS:
      return {...state, address: action.payload};
    case USER_SET_NUMBER:
      return {...state, number: action.payload};
    case USER_SET_COUNTY:
      return {...state, county: action.payload};
    case USER_SET_POSTALCODE:
      return {...state, postalCode: action.payload};
    case USER_RESET:
      return initialUser;
    default:
      return state;
  }
};

export default userReducer;
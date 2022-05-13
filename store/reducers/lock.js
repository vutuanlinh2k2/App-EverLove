import {
  SET_APP_PASSWORD,
  REMOVE_APP_PASSWORD,
  GET_APP_PASSWORD,
  SET_TRY_UNLOCK,
} from "../actions/lock";

const initialState = {
  password: null,
  tryUnlock: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_APP_PASSWORD:
      return {
        password: action.password,
        tryUnlock: false,
      };
    case SET_TRY_UNLOCK:
      return {
        ...state,
        tryUnlock: true,
      };
    case SET_APP_PASSWORD:
      return {
        password: action.password,
        tryUnlock: true,
      };
    case REMOVE_APP_PASSWORD:
      return {
        password: null,
        tryUnlock: true,
      };
    default:
      return state;
  }
};

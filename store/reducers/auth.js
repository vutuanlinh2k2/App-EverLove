import {
  AUTHENTICATE,
  SET_DID_TRY_AUTO_LOGIN,
  LOGOUT,
  FORGOT_PASSWORD,
} from "../actions/auth";

const initialState = {
  userId: null,
  didTryAutoLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        userId: action.userId,
        didTryAutoLogin: true,
      };
    case SET_DID_TRY_AUTO_LOGIN:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    case LOGOUT:
      return {
        ...initialState,
        didTryAutoLogin: true,
      };
    case FORGOT_PASSWORD:
      return state;
    default:
      return state;
  }
};

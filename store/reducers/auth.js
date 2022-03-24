import { AUTHENTICATE, SET_DID_TRY_AUTO_LOGIN, LOGOUT } from "../actions/auth";

const initialState = {
  userId: null,
  didTryAutoLogin: false,
  userInfoExisted: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        // ...state,
        userId: action.userId,
        didTryAutoLogin: true,
        userInfoExisted: action.userInfoExisted,
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
    default:
      return state;
  }
};

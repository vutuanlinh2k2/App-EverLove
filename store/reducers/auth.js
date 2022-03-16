import { AUTHENTICATE, SET_DID_TRY_AUTO_LOGIN } from "../actions/auth";

const initialState = {
  userId: null,
  didTryAutoLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        // ...state,
        userId: action.userId,
        didTryAutoLogin: true,
      };
    case SET_DID_TRY_AUTO_LOGIN:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    default:
      return state;
  }
};

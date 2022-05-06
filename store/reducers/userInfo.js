import {
  SET_USER_INFO,
  GET_USER_INFO,
  CLEAR_USER_INFO,
  CHANGE_LOVE_DATE,
  CHANGE_BASIC_INFO,
} from "../actions/userInfo";

const initialState = {
  name: null,
  nickname: null,
  gender: null,
  birthday: null,
  image: null,
  zodiac: null,
  partnerName: null,
  partnerNickname: null,
  partnerImage: null,
  partnerBirthday: null,
  partnerGender: null,
  partnerZodiac: null,
  loveDate: null,
  noAds: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.userInfo,
      };
    case GET_USER_INFO:
      return {
        ...state,
        ...action.userInfo,
      };
    case CLEAR_USER_INFO:
      return initialState;
    case CHANGE_LOVE_DATE:
      return {
        ...state,
        loveDate: {
          day: action.day,
          month: action.month,
          year: action.year,
        },
      };
    case CHANGE_BASIC_INFO:
      return {
        ...state,
        ...action.updatedInfo,
      };
    default:
      return state;
  }
};

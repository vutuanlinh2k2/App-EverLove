import {
  SET_USER_INFO,
  GET_USER_INFO,
  CLEAR_USER_INFO,
  CHANGE_LOVE_DATE,
} from "../actions/userInfo";

const initialState = {
  name: null,
  nickname: null,
  gender: null,
  birthDay: null,
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
    default:
      return state;
  }
};

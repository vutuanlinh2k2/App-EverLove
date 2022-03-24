import { GET_USER_INFO } from "../actions/userInfo";

const initialState = {
  name: null,
  nickname: null,
  gender: null,
  birthDay: null,
  image: null,
  partnerName: null,
  partnerNickname: null,
  partnerImage: null,
  partnerBirthday: null,
  partnerGender: null,
  loveDate: null,
  isVIP: false,
  noAds: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        ...action.userInfo,
      };
    default:
      return state;
  }
};

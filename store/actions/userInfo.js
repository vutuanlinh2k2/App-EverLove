import AsyncStorage from "@react-native-async-storage/async-storage";

export const SET_USER_INFO = "SET_USER_INFO";
export const GET_USER_INFO = "GET_USER_INFO";

export const setUserInfo = (userInfo) => {
  return async (dispatch) => {
    saveUserInfoToStorage(userInfo);
    dispatch({
      type: SET_USER_INFO,
      userInfo,
    });
  };
};

export const getUserInfo = (userInfo) => {
  return {
    type: GET_USER_INFO,
    userInfo,
  };
};

const saveUserInfoToStorage = (userInfo) => {
  try {
    AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (err) {
    console.log(err);
  }
};

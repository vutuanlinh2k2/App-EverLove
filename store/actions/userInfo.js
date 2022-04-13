import AsyncStorage from "@react-native-async-storage/async-storage";

import { firebaseCreateUserInfo } from "../../firebase/userInfo";

export const SET_USER_INFO = "SET_USER_INFO";
export const GET_USER_INFO = "GET_USER_INFO";
export const CLEAR_USER_INFO = "CLEAR_USER_INFO";

export const createUserInfo = (userInfo) => {
  return async (dispatch) => {
    await firebaseCreateUserInfo(userInfo);
    dispatch(setUserInfo(userInfo));
  };
};

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

export const clearUserInfo = () => {
  return {
    type: CLEAR_USER_INFO,
  };
};

const saveUserInfoToStorage = (userInfo) => {
  try {
    AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (err) {
    console.log(err);
  }
};

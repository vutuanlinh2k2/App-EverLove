import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  convertSignUpErrorMessage,
  convertLogInErrorMessage,
} from "../../utils/auth";
import { firebaseSignUp, firebaseLogIn } from "../../firebase/auth";
import { firebaseGetUserInfo } from "../../firebase/userInfo";

export const AUTHENTICATE = "AUTHENTICATE";
export const SET_DID_TRY_AUTO_LOGIN = "SET_DID_TRY_AUTO_LOGIN";
export const LOGOUT = "LOGOUT";
// export const SET_USER_INFO = "SET_USER_INFO";

export const authenticate = (userId) => {
  return async (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      userId,
      // userInfoExisted,
    });
  };
};

export const setDidTryAutoLogIn = () => {
  return { type: SET_DID_TRY_AUTO_LOGIN };
};

// export const setUserInfo = () => {
//   return { type: SET_USER_INFO };
// };

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const userId = await firebaseSignUp(email, password);
      dispatch(authenticate(userId));
      saveUserIdToStorage(userId);
    } catch (error) {
      const errorMessage = error.message;
      const shownMessage = convertSignUpErrorMessage(errorMessage);
      Alert.alert("Lỗi đăng kí", shownMessage, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
  };
};

export const logIn = (email, password) => {
  return async (dispatch) => {
    try {
      const userId = await firebaseLogIn(email, password);
      const userInfo = await firebaseGetUserInfo(userId);
      const userDataExisted = !!userInfo;
      saveUserIdToStorage(userId);
      if (userDataExisted) {
        saveUserInfoToStorage(userInfo);
      }
      dispatch(authenticate(userId));
    } catch (error) {
      const errorMessage = error.message;
      const shownMessage = convertLogInErrorMessage(errorMessage);
      Alert.alert("Lỗi đăng nhập", shownMessage, [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
  };
};

export const logOut = () => {
  AsyncStorage.removeItem("userId");
  AsyncStorage.removeItem("userInfo");
  return { type: LOGOUT };
};

const saveUserIdToStorage = (userId) => {
  try {
    AsyncStorage.setItem("userId", JSON.stringify({ userId }));
  } catch (err) {
    console.log(err);
  }
};

const saveUserInfoToStorage = (userInfo) => {
  try {
    AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (err) {
    console.log(err);
  }
};

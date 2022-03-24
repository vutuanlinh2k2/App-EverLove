import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  convertSignUpErrorMessage,
  convertLogInErrorMessage,
} from "../../utils/auth";
import { firebaseSignUp, firebaseLogIn } from "../../firebase/auth";
import { getUserInfo } from "../../firebase/userInfo";

export const AUTHENTICATE = "AUTHENTICATE";
export const SET_DID_TRY_AUTO_LOGIN = "SET_DID_TRY_AUTO_LOGIN";
export const LOGOUT = "LOGOUT";

export const authenticate = (userId, userInfoExisted) => {
  return async (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      userId,
      userInfoExisted,
    });
  };
};

export const setDidTryAutoLogIn = () => {
  return { type: SET_DID_TRY_AUTO_LOGIN };
};

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const userId = await firebaseSignUp(email, password);
      dispatch(authenticate(userId, false));
      saveDataToStorage({ userId });
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
      const userInfo = await getUserInfo(userId);
      const userDataExisted = !!userInfo;
      if (userDataExisted) {
        saveDataToStorage({ ...userInfo, userId });
      } else {
        saveDataToStorage({ userId });
      }
      dispatch(authenticate(userId, userDataExisted));
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
  AsyncStorage.removeItem("userData");
  return { type: LOGOUT };
};

const saveDataToStorage = (userData) => {
  try {
    AsyncStorage.setItem("userData", JSON.stringify(userData));
  } catch (err) {
    console.log(err);
  }
};

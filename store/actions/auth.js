import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  convertSignUpErrorMessage,
  convertLogInErrorMessage,
} from "../../utils/auth";
import {
  firebaseSignUp,
  firebaseLogIn,
  firebaseForgotPassword,
} from "../../firebase/auth";
import { firebaseGetUserInfo } from "../../firebase/userInfo";
import { setUserInfo, clearUserInfo } from "./userInfo";
import { saveUserIdToStorage } from "../../utils/asyncStorage";

export const AUTHENTICATE = "AUTHENTICATE";
export const SET_DID_TRY_AUTO_LOGIN = "SET_DID_TRY_AUTO_LOGIN";
export const LOGOUT = "LOGOUT";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";

export const authenticate = (userId) => {
  return async (dispatch) => {
    dispatch({
      type: AUTHENTICATE,
      userId,
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
      dispatch(authenticate(userId));
      await saveUserIdToStorage(userId);
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
      await saveUserIdToStorage(userId);
      if (userDataExisted) {
        dispatch(setUserInfo(userInfo));
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
  return async (dispatch) => {
    try {
      AsyncStorage.removeItem("userId");
      AsyncStorage.removeItem("userInfo");
      dispatch(clearUserInfo());
      dispatch({ type: LOGOUT });
    } catch (e) {
      Alert.alert("Lỗi", "Không thể đăng xuất", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
  };
};

export const forgotPassword = (email) => {
  return async (dispatch) => {
    try {
      await firebaseForgotPassword(email);
      Alert.alert("Đã gửi email", "Email được gửi đi thành công", [
        {
          text: "OK",
        },
      ]);
      dispatch({
        type: FORGOT_PASSWORD,
      });
    } catch (e) {
      Alert.alert("Lỗi", "Địa chỉ email không hợp lệ", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
  };
};

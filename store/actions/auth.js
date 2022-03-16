import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth } from "../../firebase";
import {
  convertSignUpErrorMessage,
  convertLogInErrorMessage,
} from "../../utils/auth";

export const AUTHENTICATE = "AUTHENTICATE";
export const SET_DID_TRY_AUTO_LOGIN = "SET_DID_TRY_AUTO_LOGIN";

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
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        dispatch(authenticate(userId));
        saveDataToStorage(userId);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const shownMessage = convertSignUpErrorMessage(errorMessage);
        Alert.alert("Lỗi đăng kí", shownMessage, [
          {
            text: "OK",
            style: "cancel",
          },
        ]);
      });
  };
};

export const logIn = (email, password) => {
  return async (dispatch) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        dispatch(authenticate(userId));
        saveDataToStorage(userId);
      })
      .catch((error) => {
        var errorMessage = error.message;
        const shownMessage = convertLogInErrorMessage(errorMessage);
        Alert.alert("Lỗi đăng nhập", shownMessage, [
          {
            text: "OK",
            style: "cancel",
          },
        ]);
      });
  };
};

const saveDataToStorage = (userId) => {
  try {
    AsyncStorage.setItem("userData", JSON.stringify({ userId }));
  } catch (err) {}
};

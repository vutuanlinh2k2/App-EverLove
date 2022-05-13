import { Alert } from "react-native";

import {
  saveAppPasswordToStorage,
  removeAppPasswordFromStorage,
} from "../../utils/asyncStorage";

export const SET_APP_PASSWORD = "SET_APP_PASSWORD";
export const REMOVE_APP_PASSWORD = "REMOVE_APP_PASSWORD";
export const GET_APP_PASSWORD = "GET_APP_PASSWORD";
export const SET_TRY_UNLOCK = "SET_TRY_UNLOCK";

export const getAppPassword = (password) => {
  return {
    type: GET_APP_PASSWORD,
    password: password,
  };
};

export const setTryUnlock = () => {
  return { type: SET_TRY_UNLOCK };
};

export const setAppPassword = (password) => {
  return async (dispatch) => {
    try {
      await saveAppPasswordToStorage(password);
      dispatch({
        type: SET_APP_PASSWORD,
        password,
      });
      Alert.alert("Thành công", "Đã lập mã khoá cho app.", [
        {
          text: "OK",
        },
      ]);
    } catch (e) {
      Alert.alert("Lỗi", "Không thể lưu mã khoá cho app.", [
        {
          text: "OK",
        },
      ]);
    }
  };
};

export const removeAppPassword = () => {
  return async (dispatch) => {
    try {
      await removeAppPasswordFromStorage();
      dispatch({ type: REMOVE_APP_PASSWORD });
      Alert.alert("Thành công", "Đã xoá mã khoá cho app.", [
        {
          text: "OK",
        },
      ]);
    } catch (e) {}
  };
};

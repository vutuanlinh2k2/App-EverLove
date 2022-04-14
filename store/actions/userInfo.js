import { Alert } from "react-native";

import { firebaseCreateUserInfo } from "../../firebase/userInfo";
import { firebaseUploadImage } from "../../firebase/imagesStorage";
import { saveUserInfoToStorage } from "../../utils/asyncStorage";

export const SET_USER_INFO = "SET_USER_INFO";
export const GET_USER_INFO = "GET_USER_INFO";
export const CLEAR_USER_INFO = "CLEAR_USER_INFO";

export const createUserInfo = (userInfo) => {
  return async (dispatch) => {
    try {
      const image = userInfo.image
        ? await firebaseUploadImage(userInfo.image)
        : null;
      const partnerImage = userInfo.partnerImage
        ? await firebaseUploadImage(userInfo.partnerImage)
        : null;

      const newInfo = { ...userInfo, image, partnerImage };
      await firebaseCreateUserInfo(newInfo);
      dispatch(setUserInfo(newInfo));
    } catch (e) {
      Alert.alert("Lỗi", "Không thể lưu thông tin của bạn và người đó", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
  };
};

export const setUserInfo = (userInfo) => {
  return async (dispatch) => {
    try {
      saveUserInfoToStorage(userInfo);
      dispatch({
        type: SET_USER_INFO,
        userInfo,
      });
    } catch {
      Alert.alert("Lỗi", "Không lưu được thông tin người dùng vào máy", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
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

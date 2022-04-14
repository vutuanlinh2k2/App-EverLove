import { Alert } from "react-native";

import {
  firebaseAddMemories,
  firebaseGetAllMemories,
} from "../../firebase/memories";
import { firebaseUploadImage } from "../../firebase/imagesStorage";

export const FETCH_MEMORIES = "FETCH_MEMORIES";
export const ADD_MEMORY = "ADD_MEMORY";

const fetchMemories = () => {};

export const addMemory = (memoryInfo) => {
  return async (dispatch) => {
    try {
      const images = memoryInfo.images;
      const imageUrls = await Promise.all(
        images.map(async (image) => {
          const imageUrl = await firebaseUploadImage(image);
          return imageUrl;
        })
      );
      const newInfo = { ...memoryInfo, images: imageUrls };
      await firebaseAddMemories(newInfo);
      dispatch({
        type: ADD_MEMORY,
        newInfo,
      });
    } catch (e) {
      Alert.alert("Lỗi", "Không thể lưu kỉ niệm lúc này", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
  };
};

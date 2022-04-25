import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import {
  firebaseUploadImage,
  firebaseDeleteImage,
} from "../firebase/imagesStorage";
import { firebaseUpdateMemories } from "../firebase/memories";
import { arrayEqual } from "../utils/general";

const useEditMemory = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    return () => {
      setIsUpdating(false);
    };
  }, []);

  const editMemory = (
    memoryId,
    newInfo,
    oldDay,
    oldMonth,
    oldYear,
    oldImages
  ) => {
    try {
      const updateMemory = async () => {
        setIsUpdating(true);

        const { images } = newInfo;
        let imageUrls = oldImages;
        const sameImages = arrayEqual(images, oldImages);

        if (!sameImages) {
          await Promise.all(
            oldImages.map(async (image) => {
              const imageUrl = await firebaseDeleteImage(image);
              return imageUrl;
            })
          );

          const newUrls = await Promise.all(
            images.map(async (image) => {
              const imageUrl = await firebaseUploadImage(userId, image);
              return imageUrl;
            })
          );

          imageUrls = newUrls;
        }

        const unSubscriber = await firebaseUpdateMemories(
          userId,
          memoryId,
          {
            ...newInfo,
            images: imageUrls,
          },
          oldDay,
          oldMonth,
          oldYear,
          oldImages
        );

        setIsUpdating(false);
        Alert.alert("Sửa thành công", "Đã sửa kỉ niệm của bạn thành công", [
          {
            text: "OK",
            style: "cancel",
          },
        ]);

        return unSubscriber;
      };
      updateMemory();
    } catch (e) {
      console.log("e :", e);
      Alert.alert("Lỗi", "Không thể sửa kỉ niệm lúc này", [
        {
          text: "Đã hiểu",
          style: "cancel",
        },
      ]);
    }
  };
  return { editMemory, isUpdating };
};

export default useEditMemory;

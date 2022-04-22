import { useState, useEffect } from "react";
import { Alert } from "react-native";

import {
  firebaseUploadImage,
  firebaseDeleteImage,
} from "../firebase/imagesStorage";
import { firebaseUpdateMemories } from "../firebase/memories";
import { arrayEqual } from "../utils/general";

const useEditMemory = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    return () => {
      setIsUpdating(false);
    };
  }, []);

  const editMemory = (memoryId, newInfo, oldImages) => {
    try {
      const updateMemory = async () => {
        setIsUpdating(true);

        const newImages = newInfo.images;
        let imageUrls = oldImages;
        const sameImages = arrayEqual(newImages, oldImages);

        if (!sameImages) {
          const newUrls = await Promise.all(
            newImages.map(async (image) => {
              const imageUrl = await firebaseUploadImage(image);
              return imageUrl;
            })
          );

          await Promise.all(
            oldImages.map(async (image) => {
              const imageUrl = await firebaseDeleteImage(image);
              return imageUrl;
            })
          );

          imageUrls = newUrls;
        }

        const unSubscriber = await firebaseUpdateMemories(memoryId, {
          ...newInfo,
          images: imageUrls,
        });

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
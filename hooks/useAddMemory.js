import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import { firebaseUploadImage } from "../firebase/imagesStorage";
import { firebaseAddMemories } from "../firebase/memories";

export const useAddMemory = () => {
  const [isUploading, setIsUploading] = useState(false);
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    return () => {
      setIsUploading(false);
    };
  }, []);

  const upLoadMemory = (memoryInfo) => {
    try {
      const addMemory = async () => {
        setIsUploading(true);

        const images = memoryInfo.images;
        const imageUrls = await Promise.all(
          images.map(async (image) => {
            const imageUrl = await firebaseUploadImage(userId, image);
            return imageUrl;
          })
        );

        const newInfo = { ...memoryInfo, images: imageUrls };
        const unSubscriber = await firebaseAddMemories(userId, newInfo);

        setIsUploading(false);
        Alert.alert("Lưu thành công", "Đã lưu kỉ niệm của bạn thành công", [
          {
            text: "OK",
            style: "cancel",
          },
        ]);
        return unSubscriber;
      };
      addMemory();
    } catch (e) {
      Alert.alert("Lỗi", "Không thể lưu kỉ niệm lúc này", [
        {
          text: "Đã hiểu",
          style: "cancel",
        },
      ]);
    }
  };
  return { upLoadMemory, isUploading };
};

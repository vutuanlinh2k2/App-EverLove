import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import { firebaseDeleteMemories } from "../../firebase/memories";
import { firebaseDeleteImage } from "../../firebase/imagesStorage";

const useDeleteMemory = () => {
  const [isLoading, setIsLoading] = useState(false);

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  const deleteMemory = (memoryId, memoryData) => {
    const { imageUrls, day, month, year } = memoryData;
    try {
      const removeMemory = async () => {
        setIsLoading(true);
        await firebaseDeleteMemories(
          userId,
          memoryId,
          imageUrls,
          day,
          month,
          year
        );
        await Promise.all(
          imageUrls.map(async (image) => {
            const imageUrl = await firebaseDeleteImage(image);
            return imageUrl;
          })
        );
        setIsLoading(false);
        Alert.alert("Xoá thành công", "Đã xoá kỉ niệm thành công", [
          {
            text: "OK",
            style: "cancel",
          },
        ]);
      };
      removeMemory();
    } catch (e) {
      Alert.alert("Xoá không thành công", "Đã xảy ra lỗi khi xoá kỉ niệm", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
  };

  return { isLoading, deleteMemory };
};

export default useDeleteMemory;

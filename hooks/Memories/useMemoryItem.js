import { useState, useEffect } from "react";
import { Alert } from "react-native";

import { firebaseDeleteMemories } from "../../firebase/memories";
import { firebaseDeleteImage } from "../../firebase/imagesStorage";

const useMemoriesItem = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  const deleteMemory = (memoryId, imageUrls) => {
    try {
      const removeMemory = async () => {
        setIsLoading(true);
        await firebaseDeleteMemories(memoryId);
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

export default useMemoriesItem;

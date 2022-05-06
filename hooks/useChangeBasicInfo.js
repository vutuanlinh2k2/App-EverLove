import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { changeBasicInfo } from "../store/actions/userInfo";
import {
  firebaseUploadImage,
  firebaseDeleteImage,
} from "../firebase/imagesStorage";
import { firebaseUpdateBasicInfo } from "../firebase/userInfo";
import { getZodiac } from "../utils/dateCounter";

const useChangeBasicInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  const updateInfo = (updatedInfo, oldImage, birthdayChanged) => {
    try {
      const changeInfo = async () => {
        setIsLoading(true);
        const isPartner = !!updatedInfo.partnerImage;
        const newImage = updatedInfo.image ?? updatedInfo.partnerImage;

        let imageUrl = oldImage;
        if (newImage !== oldImage) {
          await firebaseDeleteImage(oldImage);
          imageUrl = await firebaseUploadImage(userId, newImage);
        }

        const updatedImage = isPartner
          ? { partnerImage: imageUrl }
          : { image: imageUrl };

        let updatedZodiac = {};

        if (birthdayChanged) {
          const { day, month } = isPartner
            ? updatedInfo.partnerBirthday
            : updatedInfo.birthday;
          const zodiac = getZodiac(parseInt(day), parseInt(month));
          updatedZodiac = isPartner
            ? { partnerZodiac: zodiac }
            : { zodiac: zodiac };
        }

        const transformedInfo = {
          ...updatedInfo,
          ...updatedImage,
          ...updatedZodiac,
        };

        await firebaseUpdateBasicInfo(userId, transformedInfo);
        await AsyncStorage.mergeItem(
          "userInfo",
          JSON.stringify(transformedInfo)
        );
        dispatch(changeBasicInfo(transformedInfo));
        setIsLoading(false);
        Alert.alert("Thành công", "Đã đổi thông tin thành công", [
          {
            text: "OK",
          },
        ]);
      };
      changeInfo();
    } catch (e) {
      Alert.alert("Lỗi", "Đổi thông tin không thành công", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    updateInfo,
  };
};

export default useChangeBasicInfo;

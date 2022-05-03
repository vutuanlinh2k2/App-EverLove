import { useState } from "react";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { changeLoveDate } from "../store/actions/userInfo";
import { firebaseUpdateLoveDate } from "../firebase/userInfo";

const useDateCounter = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const updateLoveDate = (day, month, year) => {
    try {
      const updateInfo = async () => {
        setIsUpdating(true);
        await firebaseUpdateLoveDate(userId, day, month, year);
        const newLoveDate = {
          loveDate: {
            day,
            month,
            year,
          },
        };
        await AsyncStorage.mergeItem("userInfo", JSON.stringify(newLoveDate));
        dispatch(changeLoveDate(day, month, year));
        setIsUpdating(false);
        Alert.alert("Sửa thành công", "Đã sửa ngày yêu thành công", [
          {
            text: "OK",
            style: "cancel",
          },
        ]);
      };
      updateInfo();
    } catch (e) {
      Alert.alert("Lỗi", "Sửa ngày yêu không thành công", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
  };

  return {
    updateLoveDate,
    isUpdating,
  };
};

export default useDateCounter;

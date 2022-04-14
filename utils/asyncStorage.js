import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserIdToStorage = async (userId) => {
  await AsyncStorage.setItem("userId", JSON.stringify({ userId }));
};

export const saveUserInfoToStorage = async (userInfo) => {
  await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
};


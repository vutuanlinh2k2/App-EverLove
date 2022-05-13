import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserIdToStorage = async (userId) => {
  await AsyncStorage.setItem("userId", JSON.stringify({ userId }));
};

export const saveUserInfoToStorage = async (userInfo) => {
  await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const saveAppPasswordToStorage = async (password) => {
  await AsyncStorage.setItem("appPassword", JSON.stringify({ password }));
};

export const removeAppPasswordFromStorage = async () => {
  await AsyncStorage.removeItem("appPassword");
};

import { db } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseAddMemories = async (memoryInfo) => {
  const userId = await AsyncStorage.getItem("userId");
  const transformedId = JSON.parse(userId).userId;
  const unSubscriber = db
    .collection(`users/${transformedId}/memories`)
    .add(memoryInfo)
    .then(() => {});
  return unSubscriber;
};

export const firebaseDeleteMemories = async (id) => {
  const userId = await AsyncStorage.getItem("userId");
  const transformedId = JSON.parse(userId).userId;
  const unSubscriber = db
    .collection(`users/${transformedId}/memories`)
    .doc(id)
    .delete()
    .then(() => {});
  return unSubscriber;
};

export const firebaseUpdateMemories = async (id, newInfo) => {
  const userId = await AsyncStorage.getItem("userId");
  const transformedId = JSON.parse(userId).userId;
  const unSubscriber = db
    .collection(`users/${transformedId}/memories`)
    .doc(id)
    .update(newInfo)
    .then(() => {});
  return unSubscriber;
};

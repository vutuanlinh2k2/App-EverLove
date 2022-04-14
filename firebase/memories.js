import { db } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseGetAllMemories = async () => {
  const userId = await AsyncStorage.getItem("userId");
  const transformedId = JSON.parse(userId).userId;
  const unSubscriber = await db
    .collection(`users/${transformedId}/memories`)
    .onSnapshot((querySnapshot) => {
      const memoryDate = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      return memoryDate;
    });
  return unSubscriber;
};

export const firebaseAddMemories = async (memoryInfo) => {
  const userId = await AsyncStorage.getItem("userId");
  const transformedId = JSON.parse(userId).userId;
  const unSubscriber = await db
    .collection(`users/${transformedId}/memories`)
    .add(memoryInfo)
  return unSubscriber;
};

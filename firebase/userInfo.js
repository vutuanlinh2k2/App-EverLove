import { db } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseCreateUserInfo = async (userInfo) => {
  const userId = await AsyncStorage.getItem("userId");
  const transformedId = JSON.parse(userId).userId;
  await db.collection("users").doc(transformedId).set(userInfo);
};

export const firebaseGetUserInfo = async (userId) => {
  const unsubscribe = await db
    .collection("users")
    .doc(userId)
    .get()
    .then((doc) => {
      if (!doc.exists || doc === {}) {
        return null;
      } else {
        const data = doc.data();
        return data;
      }
    });
  return unsubscribe;
};

export const firebaseUpdateLoveDate = async (userId, day, month, year) => {
  const unSubscriber = await db.collection(`users`).doc(userId).update({
    loveDate: { day, month, year },
  });
  return unSubscriber;
};

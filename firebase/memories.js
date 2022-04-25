import { db, firestore } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseAddMemories = async (userId, memoryInfo) => {
  const batch = db.batch();
  const postIncrement = firestore.FieldValue.increment(1);
  const imagesUnion = firestore.FieldValue.arrayUnion(...memoryInfo.images);

  const { day, month, year } = memoryInfo;

  const memoriesRef = db.collection(`users/${userId}/memories`).doc();
  batch.set(memoriesRef, memoryInfo);

  const memoriesDayRef = db
    .collection(`users/${userId}/memoriesDay`)
    .doc(`${day}-${month}-${year}`);
  await memoriesDayRef.get().then((doc) => {
    if (doc.exists) {
      batch.update(memoriesDayRef, {
        numOfPosts: postIncrement,
        images: imagesUnion,
        day,
        month,
        year,
      });
    } else {
      batch.set(memoriesDayRef, {
        numOfPosts: postIncrement,
        images: imagesUnion,
        day,
        month,
        year,
      });
    }
  });

  const memoriesMonthRef = db
    .collection(`users/${userId}/memoriesMonth`)
    .doc(`${month}-${year}`);
  await memoriesMonthRef.get().then((doc) => {
    if (doc.exists) {
      batch.update(memoriesMonthRef, {
        numOfPosts: postIncrement,
        images: imagesUnion,
        month,
        year,
      });
    } else {
      batch.set(memoriesMonthRef, {
        numOfPosts: postIncrement,
        images: imagesUnion,
        month,
        year,
      });
    }
  });

  const memoriesYearRef = db
    .collection(`users/${userId}/memoriesYear`)
    .doc(`${year}`);
  await memoriesMonthRef.get().then((doc) => {
    if (doc.exists) {
      batch.update(memoriesYearRef, {
        numOfPosts: postIncrement,
        images: imagesUnion,
        year,
      });
    } else {
      batch.set(memoriesYearRef, {
        numOfPosts: postIncrement,
        images: imagesUnion,
        year,
      });
    }
  });

  const unSubscriber = await batch.commit();
  return unSubscriber;
};

export const firebaseDeleteMemories = async (userId, id) => {
  // const userId = await AsyncStorage.getItem("userId");
  // const transformedId = JSON.parse(userId).userId;
  const unSubscriber = db
    .collection(`users/${userId}/memories`)
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

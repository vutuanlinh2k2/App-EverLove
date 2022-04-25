import { db, firestore } from "../firebase";

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

export const firebaseDeleteMemories = async (
  userId,
  memoryId,
  deleteImages,
  day,
  month,
  year
) => {
  const batch = db.batch();
  const postDecrement = firestore.FieldValue.increment(-1);
  const imagesRemove = firestore.FieldValue.arrayRemove(...deleteImages);

  const memoryRef = db.collection(`users/${userId}/memories`).doc(memoryId);
  batch.delete(memoryRef);

  const memoriesDayRef = db
    .collection(`users/${userId}/memoriesDay`)
    .doc(`${day}-${month}-${year}`);
  await memoriesDayRef.get().then((doc) => {
    if (doc.data().numOfPosts === 1) {
      batch.delete(memoriesDayRef);
    } else {
      batch.update(memoriesDayRef, {
        numOfPosts: postDecrement,
        images: imagesRemove,
      });
    }
  });

  const memoriesMonthRef = db
    .collection(`users/${userId}/memoriesMonth`)
    .doc(`${month}-${year}`);
  await memoriesMonthRef.get().then((doc) => {
    if (doc.data().numOfPosts === 1) {
      batch.delete(memoriesMonthRef);
    } else {
      batch.update(memoriesMonthRef, {
        numOfPosts: postDecrement,
        images: imagesRemove,
      });
    }
  });

  const memoriesYearRef = db
    .collection(`users/${userId}/memoriesYear`)
    .doc(`${year}`);
  await memoriesMonthRef.get().then((doc) => {
    if (doc.data().numOfPosts === 1) {
      batch.delete(memoriesYearRef);
    } else {
      batch.update(memoriesYearRef, {
        numOfPosts: postDecrement,
        images: imagesRemove,
      });
    }
  });

  const unSubscriber = await batch.commit();
  return unSubscriber;
};

export const firebaseUpdateMemories = async (
  userId,
  id,
  newInfo,
  oldDay,
  oldMonth,
  oldYear,
  oldImages
) => {
  const {
    images: newImages,
    day: newDay,
    month: newMonth,
    year: newYear,
  } = newInfo;

  const batch = db.batch();
  const postIncrement = firestore.FieldValue.increment(1);
  const imagesUnion = firestore.FieldValue.arrayUnion(...newImages);
  const postDecrement = firestore.FieldValue.increment(-1);
  const imagesRemove = firestore.FieldValue.arrayRemove(...oldImages);

  const memoryRef = db.collection(`users/${userId}/memories`).doc(id);
  batch.update(memoryRef, newInfo);

  const updateDayInfo = async () => {
    const memoriesOldDayRef = db
      .collection(`users/${userId}/memoriesDay`)
      .doc(`${oldDay}-${oldMonth}-${oldYear}`);
    await memoriesOldDayRef.get().then((doc) => {
      if (doc.data().numOfPosts === 1) {
        batch.delete(memoriesOldDayRef);
      } else {
        batch.update(memoriesOldDayRef, {
          numOfPosts: postDecrement,
          images: imagesRemove,
        });
      }
    });

    const memoriesNewDayRef = db
      .collection(`users/${userId}/memoriesDay`)
      .doc(`${newDay}-${newMonth}-${newYear}`);
    await memoriesNewDayRef.get().then((doc) => {
      if (doc.exists) {
        batch.update(memoriesNewDayRef, {
          numOfPosts: postIncrement,
          images: imagesUnion,
        });
      } else {
        batch.set(memoriesNewDayRef, {
          numOfPosts: postIncrement,
          images: imagesUnion,
          day: newDay,
          month: newMonth,
          year: newYear,
        });
      }
    });
  };

  const updateMonthInfo = async () => {
    const memoriesOldMonthRef = db
      .collection(`users/${userId}/memoriesMonth`)
      .doc(`${oldMonth}-${oldYear}`);
    await memoriesOldMonthRef.get().then((doc) => {
      if (doc.data().numOfPosts === 1) {
        batch.delete(memoriesOldMonthRef);
      } else {
        batch.update(memoriesOldMonthRef, {
          numOfPosts: postDecrement,
          images: imagesRemove,
        });
      }
    });

    const memoriesNewMonthRef = db
      .collection(`users/${userId}/memoriesMonth`)
      .doc(`${newMonth}-${newYear}`);
    await memoriesNewMonthRef.get().then((doc) => {
      if (doc.exists) {
        batch.update(memoriesNewMonthRef, {
          numOfPosts: postIncrement,
          images: imagesUnion,
        });
      } else {
        batch.set(memoriesNewMonthRef, {
          numOfPosts: postIncrement,
          images: imagesUnion,
          month: newMonth,
          year: newYear,
        });
      }
    });
  };

  const updateYearInfo = async () => {
    const memoriesOldYearRef = db
      .collection(`users/${userId}/memoriesYear`)
      .doc(`${oldYear}`);
    await memoriesOldYearRef.get().then((doc) => {
      if (doc.data().numOfPosts === 1) {
        batch.delete(memoriesOldYearRef);
      } else {
        batch.update(memoriesOldYearRef, {
          numOfPosts: postDecrement,
          images: imagesRemove,
        });
      }
    });

    const memoriesNewYearRef = db
      .collection(`users/${userId}/memoriesYear`)
      .doc(`${newYear}`);
    await memoriesNewYearRef.get().then((doc) => {
      if (doc.exists) {
        batch.update(memoriesNewYearRef, {
          numOfPosts: postIncrement,
          images: imagesUnion,
        });
      } else {
        batch.set(memoriesNewYearRef, {
          numOfPosts: postIncrement,
          images: imagesUnion,
          year: newYear,
        });
      }
    });
  };

  if (newYear !== oldYear) {
    await updateDayInfo();
    await updateMonthInfo();
    await updateYearInfo();
  } else if (newMonth !== oldMonth) {
    await updateDayInfo();
    await updateMonthInfo();
  } else if (newDay !== oldDay) {
    await updateDayInfo();
  }

  const unSubscriber = await batch.commit();
  return unSubscriber;
};

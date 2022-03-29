import { db } from "../firebase";

export const getUserInfo = async (userId) => {
  const docRef = await db.collection("users").doc(userId);
  docRef.get().then((doc) => {
    if (!doc.exists || doc === {}) {
      return null;
    } else {
      return doc.data();
    }
  });
};

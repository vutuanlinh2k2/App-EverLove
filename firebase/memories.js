import { db } from "../firebase";
import { useSelector } from "react-redux";

export const firebaseGetAllMemories = async () => {
  const userId = useSelector((state) => state.auth.userId);
  await db
    .collection(`users/${userId}/memories`)
    .onSnapshot((querySnapshot) => {
      const memoryDate = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      return memoryDate;
    });
};

export const firebaseAddMemories = async (
  title,
  description,
  images,
  day,
  month,
  year
) => {
  const userId = useSelector((state) => state.auth.userId);
  const unSubscriber = await db
    .collection(`users/${userId}/memories`)
    .add({
      title,
      description,
      images,
      day,
      month,
      year,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  return unSubscriber;
};

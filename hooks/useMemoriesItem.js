import { useState, useEffect } from "react";
import { db } from "../firebase";
import { useSelector } from "react-redux";

export const useMemoriesItem = () => {
  const [memoriesList, setMemoriesList] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users/${userId}/memories`)
      .onSnapshot((querySnapshot) => {
        setMemoriesList(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    return unSubscriber;
  }, []);

  return memoriesList;
};

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { useSelector } from "react-redux";

import { getLoveDateCount } from "../utils/dateCounter";

export const useDateCounterHeart = () => {
  const [dateCounter, setDateCounter] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users`)
      .doc(userId)
      .onSnapshot((querySnapshot) => {
        const { day, month, year } = querySnapshot.data().loveDate;
        const dateLove = getLoveDateCount(day, month, year);
        setDateCounter(dateLove);
      });
    return unSubscriber;
  }, []);

  return dateCounter;
};

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { useSelector } from "react-redux";

import { getLoveDateCount, getZodiac, getDetailLoveDate } from "../utils/dateCounter";

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

export const useDateCounterDetail = () => {
  const [dateCounter, setDateCounter] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users`)
      .doc(userId)
      .onSnapshot((querySnapshot) => {
        const { day, month, year } = querySnapshot.data().loveDate;
        const dateLove = getDetailLoveDate(day, month, year);
        setDateCounter(dateLove);
      });
    return unSubscriber;
  }, []);

  return dateCounter;
};

export const useGetCoupleInfo = () => {
  const [coupleInfo, setCoupleInfo] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users`)
      .doc(userId)
      .onSnapshot((querySnapshot) => {
        const {
          birthDay,
          gender,
          image,
          name,
          nickname,
          partnerBirthday,
          partnerGender,
          partnerImage,
          partnerName,
          partnerNickname,
        } = querySnapshot.data();

        const { day, month } = birthDay;
        const { day: partnerDay, month: partnerMonth } = partnerBirthday;
        const zodiac = getZodiac(parseInt(day), parseInt(month));
        const partnerZodiac = getZodiac(
          parseInt(partnerDay),
          parseInt(partnerMonth)
        );

        setCoupleInfo({
          gender,
          image,
          name: nickname ?? name,
          zodiac,
          partnerGender,
          partnerImage,
          partnerName: partnerNickname ?? partnerName,
          partnerZodiac,
        });
      });
    return unSubscriber;
  }, []);
  return coupleInfo;
};

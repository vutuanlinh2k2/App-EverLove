import { useState, useEffect } from "react";
import { db } from "../firebase";
import { useSelector } from "react-redux";

import { getRandomItem } from "../utils/general";

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

export const useMemoriesItemByYear = (inputYear) => {
  const [monthMemoriesList, setMonthMemoriesList] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users/${userId}/memoriesInfo`)
      .doc("month")
      .onSnapshot((querySnapshot) => {
        const queryData = querySnapshot.data();
        const monthData = [];
        for (const month in queryData) {
          const year = month.split("/")[1];
          if (year === inputYear) {
            monthData.push({
              month,
              numOfPosts: queryData[month].numOfPosts,
              numOfImages: queryData[month].numOfImages,
              image: getRandomItem(queryData[month].images),
            });
          }
        }
        setMonthMemoriesList(monthData);
      });
    return unSubscriber;
  }, []);

  return monthMemoriesList;
};

export const useMemoriesItemByMonth = (month, year) => {
  const [memoriesList, setMemoriesList] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users/${userId}/memories`)
      .where("year", "==", year)
      .where("month", "==", month)
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

export const useMemoriesItemByDay = (day, month, year) => {
  const [memoriesList, setMemoriesList] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users/${userId}/memories`)
      .where("year", "==", year)
      .where("month", "==", month)
      .where("day", "==", day)
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

export const useYearMemoriesItem = () => {
  const [yearMemoriesList, setYearMemoriesList] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users/${userId}/memoriesInfo`)
      .doc("year")
      .onSnapshot((querySnapshot) => {
        const queryData = querySnapshot.data();
        const yearData = [];
        for (const year in queryData) {
          yearData.push({
            year,
            numOfPosts: queryData[year].numOfPosts,
            numOfImages: queryData[year].numOfImages,
            image: getRandomItem(queryData[year].images),
          });
        }
        setYearMemoriesList(yearData);
      });
    return unSubscriber;
  }, []);

  return yearMemoriesList;
};

export const useMonthMemoriesItem = () => {
  const [monthMemoriesList, setMonthMemoriesList] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users/${userId}/memoriesInfo`)
      .doc("month")
      .onSnapshot((querySnapshot) => {
        const queryData = querySnapshot.data();
        const monthData = [];
        for (const month in queryData) {
          monthData.push({
            month,
            numOfPosts: queryData[month].numOfPosts,
            numOfImages: queryData[month].numOfImages,
            image: getRandomItem(queryData[month].images),
          });
        }
        setMonthMemoriesList(monthData);
      });
    return unSubscriber;
  }, []);

  return monthMemoriesList;
};

export const useDayMemoriesItem = () => {
  const [dayMemoriesList, setDayMemoriesList] = useState();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const unSubscriber = db
      .collection(`users/${userId}/memoriesInfo`)
      .doc("day")
      .onSnapshot((querySnapshot) => {
        const queryData = querySnapshot.data();
        const dayData = [];
        for (const day in queryData) {
          dayData.push({
            day,
            numOfPosts: queryData[day].numOfPosts,
            numOfImages: queryData[day].numOfImages,
            image: getRandomItem(queryData[day].images),
          });
        }
        setDayMemoriesList(dayData);
      });
    return unSubscriber;
  }, []);

  return dayMemoriesList;
};

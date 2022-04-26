import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { db } from "../firebase";
import { getCurrentDateInfo } from "../utils/memories";
import { getRandomItem } from "../utils/general";

const memoryCarouselItem = 4;

const useMemoriesCarousel = () => {
  const [memoriesData, setMemoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userId = useSelector((state) => state.auth.userId);

//   const getMemoryLastYear = async () => {
//     const { day, month, year } = getCurrentDateInfo();

//     const memoryLastYear = await db
//       .collection(`users/${userId}/memories`)
//       .where("day", "==", day)
//       .where("month", "==", month)
//       .where("year", "==", parseInt(year - 1).toString())
//       .onSnapshot((querySnapshot) => {
//         if (
//           !querySnapshot ||
//           !querySnapshot.docs ||
//           querySnapshot.docs.length === 0
//         ) {
//           return;
//         }
//         const chosenItem = getRandomItem(querySnapshot.docs);
//         const chosenMemoryLastYear = {
//           id: chosenItem.id,
//           data: chosenItem.data(),
//         };
//         setMemoriesData([chosenMemoryLastYear]);
//       });
//   };

  return {
    memoriesData,
    isLoading,
  };
};

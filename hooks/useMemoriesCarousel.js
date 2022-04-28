import { useState, useEffect, useMemo } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import { db } from "../firebase";
import { getMemoriesInfo } from "../firebase/memories";
import { getRandomInt } from "../utils/general";
import { getCurrentDateInfo } from "../utils/memories";

const MEMORY_CAROUSEL_ITEM = 4;

const useMemoriesCarousel = () => {
  const [memoriesData, setMemoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const transformedData = useMemo(() => {
    if (memoriesData.length === 0) {
      return [];
    }
    if (memoriesData.length === 1) {
      return [
        {
          memoryLeft: memoriesData[0],
        },
      ];
    }
    if (memoriesData.length === 2) {
      return [
        {
          memoryLeft: memoriesData[0],
          memoryRight: memoriesData[1],
        },
      ];
    }
    if (memoriesData.length === 3) {
      return [
        {
          memoryLeft: memoriesData[0],
          memoryRight: memoriesData[1],
        },
        {
          memoryLeft: memoriesData[2],
        },
      ];
    }
    return [
      {
        memoryLeft: memoriesData[0],
        memoryRight: memoriesData[1],
      },
      {
        memoryLeft: memoriesData[2],
        memoryRight: memoriesData[3],
      },
    ];
  }, [memoriesData]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      retrieveData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const userId = useSelector((state) => state.auth.userId);

  const retrieveData = () => {
    try {
      const getData = async () => {
        setIsLoading(true);
        const { infoExisted, numOfPosts, currentId } = await getMemoriesInfo(
          userId
        );
        if (!infoExisted) {
        } else if (numOfPosts <= MEMORY_CAROUSEL_ITEM) {
          await getAllMemories();
        } else {
          const lastYearMemory = await getMemoryLastYear();
          const lastMonthMemory = await getMemoryLastMonth();

          if (lastMonthMemory && lastYearMemory) {
            const otherMemories = await getRandomItems(2, currentId, [
              lastYearMemory.id,
              lastMonthMemory.id,
            ]);
            setMemoriesData([
              lastMonthMemory,
              lastYearMemory,
              ...otherMemories,
            ]);
          } else if (!lastMonthMemory && lastYearMemory) {
            const otherMemories = await getRandomItems(3, currentId, [
              lastYearMemory.id,
            ]);
            setMemoriesData([lastYearMemory, ...otherMemories]);
          } else if (lastMonthMemory && !lastYearMemory) {
            const otherMemories = await getRandomItems(3, currentId, [
              lastMonthMemory.id,
            ]);
            setMemoriesData([lastMonthMemory, ...otherMemories]);
          } else {
            const memories = await getRandomItems(4, currentId);
            setMemoriesData(memories);
          }
        }
        setIsLoading(false);
      };
      getData();
    } catch (e) {
      Alert.alert("Lỗi", "Không thể tải về các kỉ niệm", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
    }
  };

  const getAllMemories = async () => {
    const unSubscriber = await db
      .collection(`users/${userId}/memories`)
      .orderBy("year", "desc")
      .orderBy("month", "desc")
      .orderBy("day", "desc")
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        });
        setMemoriesData(data);
      });
    return unSubscriber;
  };

  const getMemoryLastMonth = async () => {
    const { day, month, year } = getCurrentDateInfo();
    let transformedMonth = (parseInt(month) - 1).toString();
    transformedMonth =
      transformedMonth < 10 ? `0${transformedMonth}` : transformedMonth;

    const data = await db
      .collection(`users/${userId}/memories`)
      .where("day", "==", day)
      .where("month", "==", month !== "01" ? transformedMonth : "12")
      .where(
        "year",
        "==",
        month !== "01" ? year : parseInt(year - 1).toString()
      )
      .get();
    if (!data || !data.docs || data.docs.length === 0) {
      return null;
    }
    const docs = data.docs;
    const chosenItem = docs[Math.floor(Math.random() * docs.length)];
    return {
      id: chosenItem.id,
      data: chosenItem.data(),
    };
  };

  const getMemoryLastYear = async () => {
    const { day, month, year } = getCurrentDateInfo();

    const data = await db
      .collection(`users/${userId}/memories`)
      .where("day", "==", day)
      .where("month", "==", month)
      .where("year", "==", (parseInt(year) - 1).toString())
      .get();
    if (!data || !data.docs || data.docs.length === 0) {
      return null;
    }
    const docs = data.docs;
    const chosenItem = docs[Math.floor(Math.random() * docs.length)];
    return {
      id: chosenItem.id,
      data: chosenItem.data(),
    };
  };

  const getRandomItems = async (num, total, excludeIds = []) => {
    let memoryItems = [];
    let ids = excludeIds;
    while (memoryItems.length < num) {
      const memoryId = getRandomInt(1, total).toString();
      if (ids.includes(memoryId)) {
        continue;
      }
      const memory = await db
        .collection(`users/${userId}/memories`)
        .doc(memoryId)
        .get();
      if (!memory.exists) {
        continue;
      }
      ids.push(memory.id);
      memoryItems.push({
        data: memory.data(),
        id: memory.id,
      });
    }
    return memoryItems;
  };

  return {
    memoriesData: transformedData,
    isLoading,
  };
};

export default useMemoriesCarousel;

import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import { db } from "../../firebase";

const MEMORIES_DAY_LIMIT = 5;

const useMemoriesFilterByMonth = (month, year) => {
  const [memoriesData, setMemoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastVisibleItem, setLastVisibleItem] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    try {
      const getInitialData = async () => {
        setIsLoading(true);
        const unSubscriber = await db
          .collection(`users/${userId}/memoriesDay`)
          .where("year", "==", year)
          .where("month", "==", month)
          .orderBy("day", "desc")
          .limit(MEMORIES_DAY_LIMIT)
          .onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
              };
            });
            const lastVisible =
              querySnapshot.docs[querySnapshot.docs.length - 1];
            setMemoriesData(data);
            setLastVisibleItem(lastVisible);
            setIsLoading(false);
          });
        return unSubscriber;
      };
      getInitialData();
    } catch (e) {
      Alert.alert("Lỗi", "Không thể load được kỷ niệm.", [
        {
          text: "Đã hiểu",
          style: "cancel",
        },
      ]);
    }
  };

  const retrieveMore = () => {
    if (!lastVisibleItem) {
      return;
    }
    try {
      const getMore = async () => {
        const unSubscriber = await db
          .collection(`users/${userId}/memoriesDay`)
          .where("year", "==", year)
          .where("month", "==", month)
          .orderBy("day", "desc")
          .startAfter(lastVisibleItem)
          .limit(MEMORIES_DAY_LIMIT)
          .onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
                return {
                id: doc.id,
                data: doc.data(),
              };
            });
            const lastVisible =
              querySnapshot.docs[querySnapshot.docs.length - 1];
            setMemoriesData([...memoriesData, ...data]);
            setLastVisibleItem(lastVisible);
            setIsRefreshing(false);
          });
        return unSubscriber;
      };
      getMore();
    } catch (e) {
      Alert.alert("Lỗi", "Không thể load thêm kỉ niểm.", [
        {
          text: "Xem lại",
          style: "cancel",
        },
      ]);
    }
  };

  return {
    memoriesData,
    isLoading,
    retrieveMore,
    isRefreshing,
  };
};

export default useMemoriesFilterByMonth;

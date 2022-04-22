import { useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { db } from "../../firebase";
import { checkItemSameId } from "../../utils/memories";

const MEMORIES_LIMIT = 5;

const useAllMemories = () => {
  const [state, setState] = useState(0);
  const [memoriesData, setMemoriesData] = useState([]);
  const [lastVisibleItem, setLastVisibleItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const forceUpdate = () => setState(state + 1);

  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    if (checkItemSameId(memoriesData)) {
      retrieveData();
    }
  }, [memoriesData, setMemoriesData])

  const retrieveData = () => {
    try {
      const getInitialData = async () => {
        setIsLoading(true);
        const userId = await AsyncStorage.getItem("userId");
        const transformedId = JSON.parse(userId).userId;
        const unSubscriber = await db
          .collection(`users/${transformedId}/memories`)
          .orderBy("year", "desc")
          .orderBy("month", "desc")
          .orderBy("day", "desc")
          .limit(MEMORIES_LIMIT)
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
      Alert.alert("Lỗi", "Không thể load được kỉ niểm.", [
        {
          text: "Xem lại",
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
        const userId = await AsyncStorage.getItem("userId");
        const transformedId = JSON.parse(userId).userId;
        const unSubscriber = await db
          .collection(`users/${transformedId}/memories`)
          .orderBy("year", "desc")
          .orderBy("month", "desc")
          .orderBy("day", "desc")
          .startAfter(lastVisibleItem)
          .limit(MEMORIES_LIMIT)
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
    isRefreshing,
    retrieveMore,
  };
};

export default useAllMemories;

import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import { db } from "../../firebase";

const useMemoriesYear = () => {
  const [memoriesData, setMemoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      retrieveData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const retrieveData = () => {
    try {
      const getInitialData = async () => {
        setIsLoading(true);
        const unSubscriber = await db
          .collection(`users/${userId}/memoriesYear`)
          .orderBy("year", "desc")
          .onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
              };
            });
            setMemoriesData(data);
            setIsLoading(false);
          });
        return unSubscriber;
      };
      getInitialData();
    } catch (e) {
      Alert.alert("Lỗi", "Không thể load được kỉ niệm.", [
        {
          text: "Đã hiểu",
          style: "cancel",
        },
      ]);
    }
  };

  return {
    memoriesData,
    isLoading,
  };
};

export default useMemoriesYear;

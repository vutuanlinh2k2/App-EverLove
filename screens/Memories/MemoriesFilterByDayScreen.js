import React from "react";
import { StyleSheet, FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryItem from "../../components/Memories/MemoryItem/MemoryItem";
import MemoryLoading from "../../components/Memories/MemoryLoading";
import useMemoriesFilterByDay from "../../hooks/Memories/useMemoriesFilterByDay";

const MemoriesFilterByDayScreen = (props) => {
  const { route } = props;
  const { day, month, year } = route.params;

  const { memoriesData, isLoading, retrieveMore, isRefreshing } =
    useMemoriesFilterByDay(day, month, year);

  if (isLoading) {
    return <MemoryLoading />;
  }

  const renderItem = ({ item }) => {
    const { images, description, title, day, month, year } = item.data;
    return (
      <MemoryItem
        imageUrls={images}
        description={description}
        title={title}
        day={day}
        month={month}
        year={year}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={memoriesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        refreshing={isRefreshing}
        onEndReachedThreshold={0}
        onEndReached={retrieveMore}
      />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  const { day, year, month } = navData.route.params;
  return {
    title: `${day}/${month}/${year}`,
  };
};

const styles = StyleSheet.create({
  list: {
    overflow: "visible",
  },
});

export default MemoriesFilterByDayScreen;

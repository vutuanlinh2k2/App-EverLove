import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { useMemoriesItemByDay } from "../../hooks/useMemoriesItem";
import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryItem from "../../components/Memories/MemoryItem/MemoryItem";
import LoadingIndicator from "../../components/UI/LoadingIndicator";
import Divider from "../../components/UI/Divider";

const MemoriesFilterByDayScreen = (props) => {
  const { route } = props;
  const { day, year, month } = route.params;
  const memoriesList = useMemoriesItemByDay(day, month, year);

  if (!memoriesList) {
    return (
      <BodyWrapper>
        <LoadingIndicator />
      </BodyWrapper>
    );
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
        ListHeaderComponent={<Divider />}
        data={memoriesList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.list}
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

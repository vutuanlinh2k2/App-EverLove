import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { useMemoriesItemByMonth } from "../../hooks/useMemoriesItem";
import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryItem from "../../components/Memories/MemoryItem/MemoryItem";
import LoadingIndicator from "../../components/UI/LoadingIndicator";
import Divider from "../../components/UI/Divider";

const MemoriesFilterByMonthScreen = (props) => {
  const { route } = props;
  const { month, year } = route.params;
  const memoriesList = useMemoriesItemByMonth(month, year);

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
  const { year, month } = navData.route.params;
  return {
    title: `${month}/${year}`,
  };
};

const styles = StyleSheet.create({
  list: {
    overflow: "visible",
  },
});

export default MemoriesFilterByMonthScreen;

import React from "react";
import { StyleSheet, FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryItem from "../../components/Memories/MemoryItem/MemoryItem";
import LoadingIndicator from "../../components/UI/LoadingIndicator";
import { useMemoriesItem } from "../../hooks/useMemoriesItem";

const MemoriesItems = (props) => {
  const memoriesList = useMemoriesItem();

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
        data={memoriesList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </BodyWrapper>
  );
};

const styles = StyleSheet.create({
  list: {
    overflow: "visible",
  },
});

export default MemoriesItems;

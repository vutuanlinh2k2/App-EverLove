import React from "react";
import { StyleSheet, FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryItem from "../../components/Memories/MemoryItem/MemoryItem";
import MemoryLoading from "../../components/Memories/MemoryLoading";
import NoMemory from "../../components/Memories/NoMemory";
import useAllMemories from "../../hooks/Memories/useAllMemories";

const MemoriesAllScreen = (props) => {
  const { navigation } = props;
  const { memoriesData, isLoading, isRefreshing, retrieveMore } =
    useAllMemories();

  if (isLoading) {
    return <MemoryLoading />;
  }

  if (memoriesData.length === 0) {
    return (
      <NoMemory
        onAddMemory={() => {
          navigation.navigate("AddMemory", { isEmpty: true });
        }}
      />
    );
  }

  const editMemory = (memoryData) => {
    navigation.navigate("EditMemory", {
      memoryData,
    });
  };

  const renderItem = ({ item }) => {
    const { images, description, title, day, month, year } = item.data;
    const id = item.id;
    return (
      <MemoryItem
        id={id}
        imageUrls={images}
        description={description}
        title={title}
        day={day}
        month={month}
        year={year}
        onEdit={editMemory}
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

const styles = StyleSheet.create({
  list: {
    overflow: "visible",
  },
});

export default MemoriesAllScreen;

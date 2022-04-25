import React from "react";
import { FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";
import useMemoriesDay from "../../hooks/Memories/useMemoriesDay";
import MemoryLoading from "../../components/Memories/MemoryLoading";
import NoMemory from "../../components/Memories/NoMemory";
import { getRandomItem } from "../../utils/general";

const MemoriesDayScreen = (props) => {
  const { navigation } = props;

  const { memoriesData, isLoading, retrieveMore, isRefreshing } =
    useMemoriesDay();

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

  const navigateScreen = (day, month, year) => {
    navigation.navigate("MemoriesFilterDay", { day, month, year });
  };

  const renderItem = ({ item }) => {
    const { day, month, year, images, numOfPosts } = item;
    return (
      <MemoryNavigateItem
        isDayItem
        title={`${day}-${month}-${year}`}
        imageUrl={getRandomItem(images)}
        numOfPosts={numOfPosts}
        numOfImages={images.length}
        onPress={() => {
          navigateScreen(day, month, year);
        }}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={memoriesData}
        keyExtractor={(item) => item.day}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshing={isRefreshing}
        onEndReachedThreshold={0}
        onEndReached={retrieveMore}
      />
    </BodyWrapper>
  );
};

export default MemoriesDayScreen;

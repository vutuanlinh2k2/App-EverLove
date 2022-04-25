import React from "react";
import { FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";
import useMemoriesMonth from "../../hooks/Memories/useMemoriesMonth";
import MemoryLoading from "../../components/Memories/MemoryLoading";
import NoMemory from "../../components/Memories/NoMemory";
import { getRandomItem } from "../../utils/general";

const MemoriesMonthScreen = (props) => {
  const { navigation } = props;

  const { memoriesData, isLoading, retrieveMore, isRefreshing } =
    useMemoriesMonth();

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

  const onGoToDay = (month, year) => {
    navigation.navigate("MemoriesFilterMonth", { month, year });
  };
  const renderItem = ({ item }) => {
    const { month, year, images, numOfPosts } = item.data;
    return (
      <MemoryNavigateItem
        title={`${month}-${year}`}
        imageUrl={getRandomItem(images)}
        numOfPosts={numOfPosts}
        numOfImages={images.length}
        onPress={() => {
          onGoToDay(month, year);
        }}
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
        refreshing={isRefreshing}
        onEndReachedThreshold={0}
        onEndReached={retrieveMore}
      />
    </BodyWrapper>
  );
};
export default MemoriesMonthScreen;

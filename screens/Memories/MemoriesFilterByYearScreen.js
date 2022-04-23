import React from "react";
import { FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";
import useMemoriesFilterByYear from "../../hooks/Memories/useMemoriesFilterByYear";
import MemoryLoading from "../../components/Memories/MemoryLoading";
import { getRandomItem } from "../../utils/general";

const MemoriesFilterByYearScreen = (props) => {
  const { route, navigation } = props;
  const year = route.params.year;
  const { memoriesData, isLoading, retrieveMore, isRefreshing } =
    useMemoriesFilterByYear(year);

  if (isLoading) {
    return <MemoryLoading />;
  }

  const renderItem = ({ item }) => {
    const { month, year, images, numOfPosts, numOfImages } = item;
    return (
      <MemoryNavigateItem
        title={`${month}-${year}`}
        imageUrl={getRandomItem(images)}
        numOfImages={numOfImages}
        numOfPosts={numOfPosts}
        onPress={() => {
          navigation.navigate("MemoriesFilterMonth", { month, year });
        }}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={memoriesData}
        keyExtractor={(item) => item.month}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshing={isRefreshing}
        onEndReachedThreshold={0}
        onEndReached={retrieveMore}
      />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  const { year } = navData.route.params;
  return {
    title: `${year}`,
  };
};

export default MemoriesFilterByYearScreen;

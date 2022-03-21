import React from "react";
import { FlatList } from "react-native";

import { useMemoriesItemByYear } from "../../hooks/useMemoriesItem";
import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";
import LoadingIndicator from "../../components/UI/LoadingIndicator";

const MemoriesFilterByYearScreen = (props) => {
  const { route } = props;
  const year = route.params.year;
  const monthMemoriesList = useMemoriesItemByYear(year);

  if (!monthMemoriesList) {
    return (
      <BodyWrapper>
        <LoadingIndicator />
      </BodyWrapper>
    );
  }

  const renderItem = ({ item }) => {
    return (
      <MemoryNavigateItem
        title={item.month}
        imageUrl={item.image}
        numOfPosts={item.numOfPosts}
        numOfImages={item.numOfImages}
        onPress={() => {
          const year = item.month.split("/")[1];
          onGoToDay(item.month, year);
        }}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={monthMemoriesList}
        keyExtractor={(item) => item.month}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
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

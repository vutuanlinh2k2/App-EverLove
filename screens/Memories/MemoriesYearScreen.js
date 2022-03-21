import React from "react";
import { FlatList } from "react-native";

import { useYearMemoriesItem } from "../../hooks/useMemoriesItem";
import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";
import LoadingIndicator from "../../components/UI/LoadingIndicator";

const MemoriesYearScreen = (props) => {
  const { navigation } = props;
  const yearMemoriesList = useYearMemoriesItem();

  if (!yearMemoriesList) {
    return (
      <BodyWrapper>
        <LoadingIndicator />
      </BodyWrapper>
    );
  }

  const renderItem = ({ item }) => {
    const onGoToMonth = (year) => {
      navigation.navigate("MemoriesFilterYear", { year });
    };
    return (
      <MemoryNavigateItem
        title={item.year}
        imageUrl={item.image}
        numOfPosts={item.numOfPosts}
        numOfImages={item.numOfImages}
        onPress={() => {
          onGoToMonth(item.year);
        }}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={yearMemoriesList}
        keyExtractor={(item) => item.year}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </BodyWrapper>
  );
};

export default MemoriesYearScreen;

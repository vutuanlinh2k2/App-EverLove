import React from "react";
import { FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";
import useMemoriesYear from "../../hooks/Memories/useMemoriesYear";
import MemoryLoading from "../../components/Memories/MemoryLoading";
import NoMemory from "../../components/Memories/NoMemory";
import { getRandomItem } from "../../utils/general";

const MemoriesYearScreen = (props) => {
  const { navigation } = props;

  const { memoriesData, isLoading } = useMemoriesYear();

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

  const renderItem = ({ item }) => {
    const onGoToMonth = (year) => {
      navigation.navigate("MemoriesFilterYear", { year });
    };
    const { year, images, numOfPosts } = item.data;
    return (
      <MemoryNavigateItem
        title={year}
        imageUrl={getRandomItem(images)}
        numOfPosts={numOfPosts}
        numOfImages={images.length}
        onPress={() => {
          onGoToMonth(year);
        }}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={memoriesData}
        keyExtractor={(item) => item.year}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </BodyWrapper>
  );
};

export default MemoriesYearScreen;

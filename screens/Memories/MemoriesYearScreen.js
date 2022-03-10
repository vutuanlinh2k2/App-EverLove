import React from "react";
import { FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";

const memoriesYearInfo = [
  {
    year: 2022,
    numOfPosts: 3,
    numOfImages: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1521145239174-279dc2227166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    year: 2021,
    numOfPosts: 23,
    numOfImages: 66,
    imageUrl:
      "https://images.unsplash.com/photo-1513744985676-c7e80ee4d05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const MemoriesYearScreen = (props) => {
  const { navigation } = props;
  const renderItem = ({ item }) => {
    const onGoToMonth = (year) => {
      navigation.navigate("MemoriesMonth", { year });
    };
    return (
      <MemoryNavigateItem
        title={item.year}
        imageUrl={item.imageUrl}
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
        data={memoriesYearInfo}
        keyExtractor={(item) => item.year}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </BodyWrapper>
  );
};

export default MemoriesYearScreen;

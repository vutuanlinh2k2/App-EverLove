import React from "react";
import { FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";

const memoriesMonthInfo = [
  {
    month: 2,
    numOfPosts: 1,
    numOfImages: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1521145239174-279dc2227166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    month: 5,
    numOfPosts: 3,
    numOfImages: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  {
    month: 9,
    numOfPosts: 3,
    numOfImages: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1512790941078-1158a9cc3255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
  },
  {
    month: 11,
    numOfPosts: 23,
    numOfImages: 66,
    imageUrl:
      "https://images.unsplash.com/photo-1513744985676-c7e80ee4d05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const MemoriesMonthScreen = (props) => {
  const { navigation, route } = props;
  const { year } = route.params ?? { year: 2022 };
  const onGoToDay = (month, year) => {
    navigation.navigate("MemoriesDay", { month, year });
  };
  const renderItem = ({ item }) => {
    return (
      <MemoryNavigateItem
        title={`${item.month}/${year}`}
        imageUrl={item.imageUrl}
        numOfPosts={item.numOfPosts}
        numOfImages={item.numOfImages}
        onPress={() => {
          onGoToDay(item.month, year);
        }}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={memoriesMonthInfo}
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
    title: year,
  };
};

export default MemoriesMonthScreen;

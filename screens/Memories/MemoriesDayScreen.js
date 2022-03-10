import React from "react";
import { StyleSheet, FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";

const memoriesDayInfo = [
  {
    day: 30,
    numOfPosts: 1,
    numOfImages: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1512790941078-1158a9cc3255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
  },
  {
    day: 23,
    numOfPosts: 3,
    numOfImages: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1521145239174-279dc2227166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    day: 13,
    numOfPosts: 1,
    numOfImages: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  {
    day: 6,
    numOfPosts: 1,
    numOfImages: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1513744985676-c7e80ee4d05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const MemoriesDayScreen = (props) => {
  const { navigation, route } = props;
  const { year, month } = route.params ?? { year: 2022, month: 11 };

  const navigateScreen = (numOfPosts, day, month, year) => {
    if (numOfPosts === 1) {
      navigation.navigate("MemoriesDetail"), { day, month, year };
    } else {
      navigation.navigate("MemoriesItems"), { day, month, year };
    }
  };

  const renderItem = ({ item }) => {
      const {day, imageUrl, numOfPosts, numOfImages } = item;
    return (
      <MemoryNavigateItem
        isDayItem
        title={`${day}/${month}/${year}`}
        imageUrl={imageUrl}
        numOfPosts={numOfPosts}
        numOfImages={numOfImages}
        onPress={() => {
            navigateScreen(numOfPosts, day, month, year);
        }}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={memoriesDayInfo}
        keyExtractor={(item) => item.day}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  const { year, month } = navData.route.params;
  return {
    title: `${month}/${year}`,
  };
};

const styles = StyleSheet.create({
  screen: {},
});

export default MemoriesDayScreen;

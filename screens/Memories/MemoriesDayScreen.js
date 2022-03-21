import React from "react";
import { FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";
import { useDayMemoriesItem } from "../../hooks/useMemoriesItem";
import LoadingIndicator from "../../components/UI/LoadingIndicator";

const MemoriesDayScreen = (props) => {
  const { navigation } = props;

  const dayMemoriesList = useDayMemoriesItem();

  if (!dayMemoriesList) {
    return (
      <BodyWrapper>
        <LoadingIndicator />
      </BodyWrapper>
    );
  }

  const navigateScreen = (day, month, year) => {
    navigation.navigate("MemoriesFilterDay", { day, month, year });
  };

  const renderItem = ({ item }) => {
    const { day, image, numOfPosts, numOfImages } = item;
    const [ itemDay, itemMonth, itemYear ] = day.split("/");
    return (
      <MemoryNavigateItem
        isDayItem
        title={day}
        imageUrl={image}
        numOfPosts={numOfPosts}
        numOfImages={numOfImages}
        onPress={() => {
          navigateScreen(itemDay, itemMonth, itemYear);
        }}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={dayMemoriesList}
        keyExtractor={(item) => item.day}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </BodyWrapper>
  );
};

export default MemoriesDayScreen;

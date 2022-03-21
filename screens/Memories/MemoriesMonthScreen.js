import React from "react";
import { FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";
import { useMonthMemoriesItem } from "../../hooks/useMemoriesItem";
import LoadingIndicator from "../../components/UI/LoadingIndicator";

const MemoriesMonthScreen = (props) => {
  const { navigation } = props;
  const monthMemoriesList = useMonthMemoriesItem();

  if (!monthMemoriesList) {
    return (
      <BodyWrapper>
        <LoadingIndicator />
      </BodyWrapper>
    );
  }

  const onGoToDay = (month, year) => {
    navigation.navigate("MemoriesFilterMonth", { month, year });
  };
  const renderItem = ({ item }) => {
    const [itemMonth, itemYear] = item.month.split("/");
    return (
      <MemoryNavigateItem
        title={item.month}
        imageUrl={item.image}
        numOfPosts={item.numOfPosts}
        numOfImages={item.numOfImages}
        onPress={() => {
          onGoToDay(itemMonth, itemYear);
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
export default MemoriesMonthScreen;

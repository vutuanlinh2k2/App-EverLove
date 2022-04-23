import React from "react";
import { StyleSheet, FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryNavigateItem from "../../components/Memories/MemoryNavigateItem";
import useMemoriesFilterByMonth from "../../hooks/Memories/useMemoriesFIlterByMonth";
import MemoryLoading from "../../components/Memories/MemoryLoading";
import { getRandomItem } from "../../utils/general";

const MemoriesFilterByMonthScreen = (props) => {
  const { route, navigation } = props;
  const { month, year } = route.params;

  const { memoriesData, isLoading, retrieveMore, isRefreshing } =
    useMemoriesFilterByMonth(month, year);

  if (isLoading) {
    return <MemoryLoading />;
  }

  const renderItem = ({ item }) => {
    const { images, day, month, year, numOfPosts, numOfImages } = item;
    return (
      <MemoryNavigateItem
        title={`${day}-${month}-${year}`}
        imageUrl={getRandomItem(images)}
        numOfImages={numOfImages}
        numOfPosts={numOfPosts}
        onPress={() => {
          navigation.navigate("MemoriesFilterDay", { day, month, year });
        }}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        // ListHeaderComponent={<Divider />}
        data={memoriesData}
        keyExtractor={(item) => item.day}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        refreshing={isRefreshing}
        onEndReachedThreshold={0}
        onEndReached={retrieveMore}
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
  list: {
    overflow: "visible",
  },
});

export default MemoriesFilterByMonthScreen;

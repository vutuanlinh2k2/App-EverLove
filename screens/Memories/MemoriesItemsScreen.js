import React from "react";
import { StyleSheet, FlatList } from "react-native";

import BodyWrapper from "../../components/UI/BodyWrapper";
import MemoryItem from "../../components/Memories/MemoryItem";

const memoryInfo = [
  {
    id: 1,
    title: "Valentines ngọt ngào",
    date: "Hôm qua",
    imageUrls: [
      "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1512790941078-1158a9cc3255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
    ],
    description:
      "Accusam justo est et erat et dolore dolore lorem. Est et invidunt lorem aliquyam. Sed invidunt consetetur at sadipscing sanctus..",
  },
  {
    id: 2,
    title: "Cầu cầu vồng",
    date: "01/03",
    imageUrls: [
      "https://images.unsplash.com/photo-1512790941078-1158a9cc3255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
      //   "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    ],
    description:
      "Accusam justo est et erat et dolore dolore lorem. Est et invidunt lorem aliquyam. Sed invidunt consetetur at sadipscing sanctus..",
  },
];

const MemoriesItems = (props) => {
  const renderItem = ({ item }) => {
    const { imageUrls, description, date, title } = item;
    return (
      <MemoryItem
        imageUrls={imageUrls}
        description={description}
        date={date}
        title={title}
      />
    );
  };
  return (
    <BodyWrapper>
      <FlatList
        data={memoryInfo}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </BodyWrapper>
  );
};

const styles = StyleSheet.create({
    list: {
        overflow: 'visible'
    },
});

export default MemoriesItems;

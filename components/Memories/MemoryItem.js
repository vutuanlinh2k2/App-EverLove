import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { availableWidth } from "../../constants/styles";
import HeadingText from "../UI/HeadingText";
import Divider from "../UI/Divider";
import MemoryDescription from "./MemoryDescription";

const MemoryItem = (props) => {
  const { onGoDetail, date, description } = props;
  return (
    <View style={styles.memoryItem}>
      <HeadingText
        headerText={date}
        actionText="Xem chi tiết"
        action={() => onGoDetail(date)}
      />
      <MemoryDescription description={description} isShorten={true} />
      <View style={styles.imagesContainer}>
        <Image
          style={styles.bigImage}
          source={{
            uri: "https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
          }}
        />
        <View style={styles.smallImages}>
          <View style={styles.imagesRow}></View>
          <View style={styles.imagesRow}></View>
        </View>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  memoryItem: {},
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  bigImage: {
    width: availableWidth / 2 - 5,
    aspectRatio: 1,
    borderRadius: 15,
  },
  smallImages: {
    width: availableWidth / 2 - 5,
    aspectRatio: 1,
  },
});

export default MemoryItem;

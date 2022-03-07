import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import { availableWidth, shadowDefault } from "../../constants/styles";
import { primaryColor, accentColor } from "../../constants/colors";
import HeadingText from "../UI/HeadingText";
import Divider from "../UI/Divider";
import MemoryDescription from "./MemoryDescription";
import MemoryDate from "./MemoryDate";
import MemoryImage from "./MemoryImage";

const MemoryItem = (props) => {
  const { onGoDetail, date, description, imagesUrl, title } = props;
  return (
    <View style={styles.memoryItem}>
      <View style={styles.memoryHeader}>
        <HeadingText headerText={title} />
        <MemoryDate date={date} />
      </View>
      <View style={styles.memoryBody}>
        <MemoryDescription description={description} isShorten={true} />
        <View style={styles.imagesContainer}>
          <MemoryImage
            size="small"
            imageUrl="https://images.unsplash.com/photo-1541089404510-5c9a779841fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
          <MemoryImage
            size="small"
            imageUrl="https://images.unsplash.com/photo-1541089404510-5c9a779841fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
          <MemoryImage
            size="small"
            imageUrl="https://images.unsplash.com/photo-1541089404510-5c9a779841fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
          <View style={styles.smallImages}>
            <View style={styles.imagesRow}></View>
            <View style={styles.imagesRow}></View>
          </View>
        </View>
      </View>
      {/* <Button title="Xem chi tiết" style={styles.button} color={primaryColor} /> */}
      {/* <Divider /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  memoryItem: {
    backgroundColor: accentColor,
    borderRadius: 25,
    marginBottom: 15,
    overflow: "hidden",
    ...shadowDefault,
  },
  memoryHeader: {
    padding: 12.5,
    paddingBottom: 5,

  },
  memoryBody: {
    backgroundColor: "white",
    padding: 12.5,
  },
  imagesContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    // backgroundColor: 'red'
  },
});

export default MemoryItem;

import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { primaryColor } from "../../../constants/colors";

const ScreenHeader = (props) => {
  const { title } = props;
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleText}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.titleBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 25,
  },
  titleText: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontFamily: "nunito-black",
    fontSize: 22,
  },
  titleBottom: {
    height: 5,
    backgroundColor: primaryColor,
    width: "20%",
    borderRadius: 10,
  },
});

export default ScreenHeader;

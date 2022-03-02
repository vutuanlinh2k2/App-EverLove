import React from "react";
import { Text, StyleSheet } from "react-native";

const HeadingText = (props) => {
  const { text } = props;
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "nunito-bold",
    fontSize: 19,
    marginBottom: 5
  },
});

export default HeadingText;

import React from "react";
import { Text, StyleSheet } from "react-native";

const HeadingText = (props) => {
  const { text } = props;
  return <Text style={styles.heading}>{text}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    marginBottom: 7.5
  },
});

export default HeadingText;

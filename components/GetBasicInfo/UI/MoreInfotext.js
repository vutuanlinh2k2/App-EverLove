import React from "react";
import { Text, StyleSheet } from "react-native";

const MoreInfoText = (props) => {
  const { text } = props;
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#bbb",
    fontSize: 11,
    marginTop: 10,
  },
});

export default MoreInfoText;

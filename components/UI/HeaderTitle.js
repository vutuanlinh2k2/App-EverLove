import React from "react";
import { Text, StyleSheet } from "react-native";

const HeaderTitle = (props) => {
  const { title } = props;
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "fredoka-bold",
    fontSize: 30,
  },
});

export default HeaderTitle;

import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { primaryColor } from "../../constants/colors";

const HeaderTitle = (props) => {
  const { title } = props;
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.titleBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "nunito-black",
    fontSize: 27.5,
    marginBottom: 5,
  },
  titleBottom: {
    height: 5,
    backgroundColor: primaryColor,
    width: "20%",
    borderRadius: 10,
  },
});

export default HeaderTitle;

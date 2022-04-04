import React from "react";
import { View, StyleSheet } from "react-native";

import { screenWidth } from "../../constants/styles";
import DateItems from "../UI/DateItems";

const DateCounter2 = (props) => {
  return (
    <View style={styles.screen}>
      <DateItems />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: screenWidth - 100,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default DateCounter2;

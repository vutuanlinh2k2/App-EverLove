import React from "react";
import { View, StyleSheet } from "react-native";

import { screenWidth } from "../../constants/styles";
import DateItem from "../UI/DateItem";

const DateCounter2 = (props) => {
  return (
    <View style={styles.screen}>
      <DateItem type={"Năm"} value={2} />
      <DateItem type={"Tháng"} value={5} />
      <DateItem type={"Tuần"} value={13} />
      <DateItem type={"Ngày"} value={2} />
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

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { screenWidth, availableWidth, shadowDefault } from "../../constants/styles";
import { accentColor } from "../../constants/colors";
import DateItem from "../UI/DateItem";

const HomeDateCounter2 = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.dateCounter}
      onPress={() => {props.onPress()}}
    >
      <DateItem type={"Năm"} value={2} />
      <DateItem type={"Tháng"} value={5} />
      <DateItem type={"Tuần"} value={13} />
      <DateItem type={"Ngày"} value={2} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dateCounter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: screenWidth - 200,
    width: availableWidth,
    backgroundColor: accentColor,
    borderRadius: 15,
    ...shadowDefault
  },
});

export default HomeDateCounter2;
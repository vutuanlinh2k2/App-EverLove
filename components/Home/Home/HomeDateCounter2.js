import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { screenWidth } from "../../../constants/styles";
import { accentColor } from "../../../constants/colors";
import DateItem from "../DateItem";

const HomeDateCounter2 = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.dateCounter}
      onPress={() => {props.onPress(1)}}
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
    height: screenWidth - 150,
    backgroundColor: accentColor,
    marginBottom: 12.5,
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: {
      width: -1,
      height: 4,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  },
});

export default HomeDateCounter2;

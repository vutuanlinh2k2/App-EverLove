import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useDateCounterDetail } from "../../hooks/useDateCounter";
import {
  screenWidth,
  availableWidth,
  shadowDefault,
} from "../../constants/styles";
import { accentColor } from "../../constants/colors";
import DateItem from "../UI/DateItem";

const HomeDateCounter2 = (props) => {
  const dateCounterData = useDateCounterDetail();
  if (!dateCounterData) {
    return <></>;
  }
  const { day, week, month, year } = dateCounterData;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.dateCounter}
      onPress={() => {
        props.onPress();
      }}
    >
      <DateItem type={"Năm"} value={year} />
      <DateItem type={"Tháng"} value={month} />
      <DateItem type={"Tuần"} value={week} />
      <DateItem type={"Ngày"} value={day} />
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
    ...shadowDefault,
  },
  container: {
    flex: 1,
    height: screenWidth - 200,
    backgroundColor: accentColor,
    borderRadius: 15,
    ...shadowDefault,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeDateCounter2;

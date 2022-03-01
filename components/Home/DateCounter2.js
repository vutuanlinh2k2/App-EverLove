import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { screenWidth } from "../../constants/styles";
import { primaryColor } from "../../constants/colors";

const DateItem = (props) => {
  const { type, value } = props;

  return (
    <View style={styles.dateItem}>
      <Text style={styles.dateType}>{type}</Text>
      <View style={styles.dateValueContainer}>
        <Text style={styles.dateValue}>{value}</Text>
      </View>
    </View>
  );
};

const DateCounter2 = (props) => {
  return (
    <View style={styles.dateCounter}>
      <DateItem type={"Năm"} value={2} />
      <DateItem type={"Tháng"} value={5} />
      <DateItem type={"Tuần"} value={13} />
      <DateItem type={"Ngày"} value={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  dateCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    height: screenWidth - 150,
    paddingVertical: 5,
    backgroundColor: "#F9D7D7",
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
  dateItem: {
    width: "21%",
  },
  dateType: {
    fontFamily: "nunito-bold",
    textAlign: "center",
    marginBottom: 5,
  },
  dateValueContainer: {
    backgroundColor: primaryColor,
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  dateValue: {
    fontFamily: "nunito",
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
});

export default DateCounter2;

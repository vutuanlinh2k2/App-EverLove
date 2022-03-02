import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { primaryColor } from "../../constants/colors";

const DateItem = (props) => {
  const { type, value } = props;

  return (
    <View style={styles.dateItem}>
      <Text style={styles.dateType}>{type}</Text>
      <View style={styles.dateValueContainer}>
        <View style={styles.gradient}>
          <Text style={styles.dateValue}>{value}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateItem: {
    width: "21%",
    overflow: "visible",
  },
  dateType: {
    fontFamily: "nunito-bold",
    textAlign: "center",
    marginBottom: 2.5,
    fontSize: 12
  },
  dateValueContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  gradient: {
    width: "100%",
    borderRadius: 15,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primaryColor
  },
  dateValue: {
    fontFamily: "nunito",
    textAlign: "center",
    color: "white",
    fontSize: 28,
  },
});

export default DateItem;

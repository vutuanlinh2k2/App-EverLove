import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { primaryColor } from "../../constants/colors";
import { shadowDefault } from "../../constants/styles";

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
    ...shadowDefault
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

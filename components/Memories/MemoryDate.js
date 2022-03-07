import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { primaryColor, accentColor } from "../../constants/colors";

const MemoryDate = (props) => {
  const { date } = props;
  return (
    <View style={styles.dateContainer}>
      <Ionicons name="calendar" size={23} color={primaryColor} />
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  date: {
    fontFamily: "nunito",
    color: "#445d6e",
    marginLeft: 7.5,
    // textDecoration: "underline"
  },
});

export default MemoryDate;

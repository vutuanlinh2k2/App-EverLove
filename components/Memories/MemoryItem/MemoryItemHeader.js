import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

import { primaryColor, commonTextColor } from "../../../constants/colors";

const iconSize = 24;

const MemoryItemHeader = (props) => {
  const { title, date, onOpenActions } = props;
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.titleUnderline} />
      <View style={styles.infoSection}>
        <View style={styles.date}>
          <FontAwesome5
            name="calendar-day"
            size={iconSize}
            color={primaryColor}
          />
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.actions}>
          <Feather
            name="more-horizontal"
            size={iconSize}
            color={primaryColor}
            onPress={onOpenActions}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "nunito-black",
    fontSize: 20,
    marginBottom: 2.5,
  },
  titleUnderline: {
    height: 5,
    width: "25%",
    backgroundColor: primaryColor,
    borderRadius: 10,
    marginBottom: 5,
  },
  infoSection: {
    marginVertical: 7.5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontFamily: "nunito-bold",
    color: commonTextColor,
    marginLeft: 7.5,
  },
  actions: {
    flexDirection: "row",
  },
  actionIcon: {
    marginLeft: 10,
  },
});

export default MemoryItemHeader;

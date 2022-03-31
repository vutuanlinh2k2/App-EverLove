import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import {
  primaryColor,
  accentColor,
  commonTextColor,
  greyColor,
} from "../../../constants/colors";

const PlanChoiceItem = (props) => {
  const { title, price, features, isSelected, onPress } = props;
  const itemStyle = isSelected
    ? {
        borderColor: primaryColor,
        backgroundColor: accentColor,
      }
    : {
        borderColor: greyColor,
      };
  return (
    <Pressable style={[styles.container, itemStyle]} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      {features.map((feat) => {
        return (
          <View key={feat} style={styles.featLine}>
            <Text style={styles.featText}>{`- ${feat}`}</Text>
          </View>
        );
      })}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderRadius: 15,
    padding: 10,
    borderWidth: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "nunito-bold",
  },
  price: {
    fontFamily: "nunito-black",
  },
  featLine: {
    flexDirection: "row",
    alignItems: "center",
  },
  featText: {
    fontSize: 11,
    fontFamily: "nunito",
    color: commonTextColor,
  },
});

export default PlanChoiceItem;

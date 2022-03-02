import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { screenWidth } from "../../../constants/styles";
import { accentColor } from "../../../constants/colors";
import Heart from "../Heart";

const HomeDateCounter1 = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.dateCounter}
      onPress={() => {props.onPress(0)}}
    >
      <Heart />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dateCounter: {
    justifyContent: "center",
    alignItems: "center",
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

export default HomeDateCounter1;

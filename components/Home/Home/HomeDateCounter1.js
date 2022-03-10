import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import {
  screenWidth,
  availableWidth,
  shadowDefault,
} from "../../../constants/styles";
import { accentColor } from "../../../constants/colors";
import Heart from "../Heart";

const HomeDateCounter1 = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.dateCounter}
      onPress={() => {
        props.onPress(0);
      }}
    >
      <Heart fontSize={14} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dateCounter: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    width: availableWidth,
    backgroundColor: accentColor,
    borderRadius: 15,
    aspectRatio: 3 / 2,
    ...shadowDefault,
  },
});

export default HomeDateCounter1;

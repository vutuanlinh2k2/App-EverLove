import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import {
  screenHeight,
  shadowDefault,
  appPaddingHorizontal,
} from "../../../constants/styles";
import { primaryColor } from "../../../constants/colors";

const ContinueButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Tiếp tục</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    ...shadowDefault,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight / 15,
    borderRadius: 15,
    backgroundColor: primaryColor,
    marginTop: 20,
    // marginHorizontal: appPaddingHorizontal
  },
  buttonText: {
    color: "white",
    fontFamily: "nunito-bold",
  },
});

export default ContinueButton;

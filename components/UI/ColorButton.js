import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { screenHeight, shadowDefault } from "../../constants/styles";
import { primaryColor } from "../../constants/colors";

const ColorButton = (props) => {
  const { text, onPress, style } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
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
  },
  buttonText: {
    color: "white",
    fontFamily: "nunito-bold",
  },
});

export default ColorButton;

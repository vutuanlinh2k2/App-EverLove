import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import {
  screenHeight,
  shadowDefault,
  appPaddingHorizontal,
} from "../../constants/styles";
import { primaryColor } from "../../constants/colors";

const GoBackButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Quay lại</Text>
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
    marginHorizontal: appPaddingHorizontal,
    borderWidth: 2,
    borderColor: primaryColor,
    marginTop: 10
  },
  buttonText: {
    color: primaryColor,
    fontFamily: "nunito-bold",
  },
});

export default GoBackButton;

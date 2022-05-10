import React from "react";
import { Text, StyleSheet } from "react-native";

import { commonTextColor } from "../../constants/colors";

const SettingText = (props) => {
  const { text, style, ...otherProps } = props;
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: commonTextColor,
    fontSize: 13,
    fontFamily: "nunito",
  },
});

export default SettingText;

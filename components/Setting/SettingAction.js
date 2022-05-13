import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { greyColor } from "../../constants/colors";

const SettingAction = (props) => {
  const { text, color, isBold, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: greyColor,
        paddingVertical: 10,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: isBold ? "nunito-bold" : "nunito",
          color: color,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SettingAction;

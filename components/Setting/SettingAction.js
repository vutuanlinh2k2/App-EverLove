import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { commonTextColor, greyColor } from "../../constants/colors";
import { shadowDefault, screenHeight } from "../../constants/styles";

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

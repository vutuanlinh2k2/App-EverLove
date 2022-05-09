import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { commonTextColor } from "../../constants/colors";
import { shadowDefault, screenHeight } from "../../constants/styles";

const InputWithIcon = (props) => {
  const { IconComponent, iconName, style, ...inputProps } = props;
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        <IconComponent name={iconName} size={24} color={commonTextColor} />
      </View>
      <TextInput style={[styles.textInput, style]} {...inputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    ...shadowDefault,
    height: screenHeight / 15,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: "white",
  },
  iconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    color: commonTextColor,
    flex: 1,
    marginLeft: 10,
  },
});

export default InputWithIcon;

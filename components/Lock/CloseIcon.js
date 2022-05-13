import React from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { primaryColor } from "../../constants/colors";

const CloseIcon = (props) => {
  const { onPress } = props;
  return (
    <Feather
      style={styles.icon}
      name="x"
      size={30}
      color={primaryColor}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
});

export default CloseIcon;

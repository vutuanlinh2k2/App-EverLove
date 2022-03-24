import React from "react";
import { View, StyleSheet } from "react-native";

import { greyColor } from "../../constants/colors";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: greyColor,
    marginVertical: 15,
  },
});

export default Divider;

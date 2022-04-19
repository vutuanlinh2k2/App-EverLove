import React from "react";
import { View, StyleSheet } from "react-native";

import { backgroundColor } from "../../constants/colors";
import LoadingIndicator from "../UI/LoadingIndicator";

const MemoryLoading = (props) => {
  return (
    <View style={styles.screen}>
      <LoadingIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
  },
});

export default MemoryLoading;

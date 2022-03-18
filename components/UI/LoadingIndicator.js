import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";

import { primaryColor } from "../../constants/colors";

const LoadingIndicator = (props) => {
  const { white } = props;
  return (
    <ActivityIndicator size="large" color={white ? "white" : primaryColor} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingIndicator;

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { appPaddingHorizontal } from "../../constants/styles";

const BodyWrapper = (props) => {
  const { children } = props;
  return (
    <View style={styles.body}>
      <ScrollView>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: appPaddingHorizontal,
  },
});

export default BodyWrapper;

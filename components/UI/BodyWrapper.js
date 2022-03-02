import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { appPaddingHorizontal } from "../../constants/styles";

const BodyWrapper = (props) => {
  const { children } = props;
  return (
    <View style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.view}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: appPaddingHorizontal,
  },
  view: {
    overflow: "visible",
  }
});

export default BodyWrapper;

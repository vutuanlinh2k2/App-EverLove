import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { appPaddingHorizontal } from "../../constants/styles";
import { backgroundColor } from "../../constants/colors";

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
    backgroundColor: backgroundColor,
    paddingHorizontal: appPaddingHorizontal,
  },
  view: {
    overflow: "visible",
  },
});

export default BodyWrapper;

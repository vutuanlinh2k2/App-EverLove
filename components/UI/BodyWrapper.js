import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { appPaddingHorizontal } from "../../constants/styles";
import { backgroundColor } from "../../constants/colors";

const BodyWrapper = (props) => {
  const { children, scrollable } = props;
  return (
    <View style={styles.body}>
      {scrollable ? (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.view}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.view}>{children}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: appPaddingHorizontal,
    marginBottom: 15
  },
  view: {
    overflow: "visible",
  },
});

export default BodyWrapper;

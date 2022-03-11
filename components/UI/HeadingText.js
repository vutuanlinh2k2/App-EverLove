import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { primaryColor } from "../../constants/colors";

const HeadingText = (props) => {
  const { headerText, actionText, action } = props;
  return (
    <View
      style={{
        ...styles.headerContainer,
        justifyContent: actionText ? "space-between" : "flex-start",
      }}
    >
      <Text style={styles.heading}>{headerText}</Text>
      <Text style={styles.action} onPress={action}>
        {actionText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  heading: {
    fontFamily: "nunito-black",
    fontSize: 19,
  },
  action: {
    fontFamily: "nunito",
    color: primaryColor,
  },
});

export default HeadingText;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { screenWidth } from "../../constants/styles";

const AuthHeader = (props) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.appLogo}
        source={require("../../assets/app-logo.png")}
      />
      <Text style={styles.appName}>EverLove</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  appLogo: {
    width: screenWidth * 3 / 8,
    height: screenWidth * 3 / 8,
    marginBottom: -25,
  },
  appName: {
    fontFamily: "nunito-black",
    fontSize: 30,
  },
});

export default AuthHeader;

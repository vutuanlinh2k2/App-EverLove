import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { commonTextColor } from "../../constants/colors";
import { appPaddingHorizontal, screenWidth } from "../../constants/styles";
import GoBackIcon from "./common/GoBackIcon";

import ContinueButton from "./common/ContinueButton";

const StartApp = (props) => {
  const { onStartApp, goBackItem } = props;

  return (
    <View style={styles.screen}>
      <GoBackIcon onPress={goBackItem} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require("../../assets/app-logo.png")}
          />
          <Text style={styles.appName}>EverLove</Text>
        </View>
        <Text style={styles.description}>
          Tạo, lưu giữ và nhận thông báo kỉ niệm của bạn và người ấy
        </Text>
        <ContinueButton text="Bắt đầu" onPress={onStartApp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: appPaddingHorizontal,
  },
  container: {
    justifyContent: "center",
    flex: 1,
  },
  header: {
    alignItems: "center",
  },
  appName: {
    textAlign: "center",
    fontFamily: "nunito-black",
    fontSize: 35,
  },
  image: {
    width: screenWidth / 3,
    height: screenWidth / 3,
    marginVertical: -20,
  },
  description: {
    textAlign: "center",
    marginVertical: 7.5,
    fontFamily: "nunito",
    color: commonTextColor,
    fontSize: 13,
    paddingHorizontal: 10
  },
});

export default StartApp;

import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { backgroundColor, primaryColor } from "../constants/colors";
import { screenWidth } from "../constants/styles";
import { setDidTryAutoLogIn, authenticate } from "../store/actions/auth";
import { getUserInfo } from "../store/actions/userInfo";
import { getAppPassword } from "../store/actions/lock";

const StartUpScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        dispatch(setDidTryAutoLogIn());
        return;
      }
      const transformedId = JSON.parse(userId).userId;
      if (!transformedId) {
        dispatch(setDidTryAutoLogIn());
        return;
      }
      const userInfo = await AsyncStorage.getItem("userInfo");

      const transformedInfo = JSON.parse(userInfo);
      if (transformedInfo) {
        dispatch(getUserInfo(transformedInfo));
      }

      dispatch(authenticate(transformedId));

      const appPassword = await AsyncStorage.getItem("appPassword");
      if (!appPassword) {
        return;
      }

      const transformedPassword = JSON.parse(appPassword).password;
      dispatch(getAppPassword(transformedPassword));
    };
    tryLogin();
  }, []);

  return (
    <View style={styles.screen}>
      <Image
        style={styles.appLogo}
        source={require("../assets/app-logo.png")}
      />
      <Text style={styles.appName}>EverLove</Text>
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
  appLogo: {
    width: screenWidth / 2,
    height: screenWidth / 2,
    marginBottom: -20,
  },
  appName: {
    fontFamily: "nunito-black",
    color: primaryColor,
    fontSize: 30,
  },
});

export default StartUpScreen;

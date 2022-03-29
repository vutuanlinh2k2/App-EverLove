import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { backgroundColor, primaryColor } from "../constants/colors";
import { screenWidth } from "../constants/styles";
import { setDidTryAutoLogIn, authenticate } from "../store/actions/auth";
import { getUserInfo } from "../store/actions/userInfo";

const StartUpScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        dispatch(setDidTryAutoLogIn());
        return;
      }
      const transformedData = JSON.parse(userData);
      const { userId, ...userInfo } = transformedData;
      if (!userId) {
        dispatch(setDidTryAutoLogIn());
        return;
      }
      if (Object.keys(userInfo).length === 0) {
        dispatch(authenticate(userId, false));
      } else {
        dispatch(authenticate(userId, true));
        dispatch(getUserInfo(userId));
      }
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

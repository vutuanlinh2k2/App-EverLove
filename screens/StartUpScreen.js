import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { backgroundColor, primaryColor } from "../constants/colors";
import { screenWidth } from "../constants/styles";
import { setDidTryAutoLogIn, authenticate } from "../store/actions/auth";

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
      const { userId } = transformedData;
      if (!userId) {
        dispatch(setDidTryAutoLogIn());
        return;
      }
      dispatch(authenticate(userId));
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

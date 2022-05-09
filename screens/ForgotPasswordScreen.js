import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { backgroundColor } from "../constants/colors";
import { appPaddingHorizontal, screenHeight } from "../constants/styles";
import ForgotPassword from "../components/Auth/ForgotPassword";
import GoBackIcon from "../components/GetBasicInfo/common/GoBackIcon";

const ForgotPasswordScreen = (props) => {
  const { navigation } = props;

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <GoBackIcon
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.content}>
          <View style={{ width: "100%" }}>
            <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
            <ForgotPassword />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: appPaddingHorizontal,
    backgroundColor: backgroundColor,
  },
  container: {
    flex: 1,
    height: screenHeight,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
  },
  forgotPassword: {
    fontFamily: "nunito-black",
    fontSize: 22,
  },
});

export default ForgotPasswordScreen;

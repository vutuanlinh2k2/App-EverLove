import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { primaryColor, backgroundColor, greyColor } from "../constants/colors";
import { appPaddingHorizontal, screenHeight } from "../constants/styles";
import AuthHeader from "../components/Auth/AuthHeader";
import AuthInputs from "../components/Auth/AuthInputs";
// import SocialAuthButton from "../components/Auth/SocialAuthButton";

const AuthScreen = (props) => {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        paddingHorizontal: appPaddingHorizontal,
      }}
    >
      <View style={styles.screen}>
        <View style={{width: '100%'}}>
          <AuthHeader />
          <AuthInputs isSignup={isSignup} />
          {!isSignup && <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>}
          {/* <View style={styles.lineText}>
            <View style={styles.line} />
            <Text style={styles.text}>hoặc</Text>
            <View style={styles.line} />
          </View>
          <SocialAuthButton
            name="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            title={!isSignup ? "Đăng nhập bằng Google" : "Đăng ký bằng Google"}
            onPress={() => {}}
          />
          <SocialAuthButton
            name="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            title={!isSignup ? "Đăng nhập bằng Facebook" : "Đăng ký bằng Facebook"}
            onPress={() => {}}
          /> */}

          {!isSignup ? <Text style={styles.signupText}>
            Chưa có tài khoản?{" "}
            <Text
              style={{ color: primaryColor }}
              onPress={() => {
                setIsSignup(true);
              }}
            >
              Đăng kí
            </Text>
          </Text> : <Text style={styles.signupText}>
            Đã có tài khoản?{" "}
            <Text
              style={{ color: primaryColor }}
              onPress={() => {
                setIsSignup(false);
              }}
            >
              Đăng nhập
            </Text>
          </Text>}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight,
  },
  lineText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12.5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: greyColor,
  },
  text: {
    marginHorizontal: 10,
    fontFamily: "nunito",
    fontSize: 13,
  },
  forgotPassword: {
    textAlign: "center",
    fontFamily: "nunito-bold",
    color: primaryColor,
    marginTop: 15,
  },
  signupText: {
    fontFamily: "nunito-bold",
    textAlign: "center",
    marginVertical: 15,
  },
});

export default AuthScreen;

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { logOut } from "../store/actions/auth";
import { navigatorHeaderDefaultOptions } from "../constants/navigation";
import { iconBottomSize, appPaddingHorizontal } from "../constants/styles";
import { backgroundColor, greyColor } from "../constants/colors";
import { menuScreenTitle } from "../constants/screenTitles";
import HeaderTitle from "../components/UI/HeaderTitle";
import BodyWrapper from "../components/UI/BodyWrapper";
import SettingItem from "../components/Setting/SettingItem";
import SettingAction from "../components/Setting/SettingAction";
import SettingSpace from "../components/Setting/SettingSpace";
import SettingText from "../components/Setting/SettingText";

const Divider = () => {
  return <View style={styles.divider} />;
};

const SettingScreen = (props) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOut());
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.main}>
        <HeaderTitle title={menuScreenTitle} />
        <SettingItem
          title="Tên"
          IconComponent={Feather}
          iconName="user"
          onPress={() => {}}
        />
        <SettingItem
          title="Email"
          IconComponent={Feather}
          iconName="mail"
          onPress={() => {}}
        />
        <Divider />
        <SettingItem
          title="Bật mã khoá"
          IconComponent={Feather}
          iconName="lock"
          onPress={() => {}}
        />
        <SettingItem
          title="Đổi mã khoá"
          IconComponent={Feather}
          iconName="unlock"
          onPress={() => {}}
        />
        <Divider />
        <SettingItem
          title="Nhận xét app"
          IconComponent={Feather}
          iconName="star"
          onPress={() => {}}
        />
        <SettingItem
          title="Gửi phản hồi"
          IconComponent={Ionicons}
          iconName="chatbubble-ellipses-outline"
          onPress={() => {}}
        />
      </View>
      <SettingSpace />
      <SettingAction text="Đăng xuất" color="red" onPress={logOut} />
      <SettingSpace />
      <SettingAction
        text="Xoá tài khoản"
        color="red"
        onPress={() => {}}
      />
      <SettingText text="EverLove v1.0" style={styles.footer} />
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    ...navigatorHeaderDefaultOptions,
    headerTitle: "",
    tabBarIcon: ({ color }) => (
      <Feather name="settings" size={iconBottomSize} color={color} />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: backgroundColor,
  },
  main: {
    paddingHorizontal: appPaddingHorizontal,
  },
  footer: {
    textAlign: "center",
    marginTop: 10,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: greyColor,
    marginVertical: 5,
  },
});

export default SettingScreen;

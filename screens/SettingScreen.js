import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { logOut } from "../store/actions/auth";
import { navigatorHeaderDefaultOptions } from "../constants/navigation";
import { iconBottomSize, appPaddingHorizontal } from "../constants/styles";
import {
  backgroundColor,
  greyColor,
  commonTextColor,
  primaryColor,
} from "../constants/colors";
import { menuScreenTitle } from "../constants/screenTitles";
import HeaderTitle from "../components/UI/HeaderTitle";
import SettingItem from "../components/Setting/SettingItem";
import SettingAction from "../components/Setting/SettingAction";
import SettingSpace from "../components/Setting/SettingSpace";
import SettingText from "../components/Setting/SettingText";

const Divider = () => {
  return <View style={styles.divider} />;
};

const InfoText = (props) => {
  const { text } = props;
  let shownText = text;
  if (shownText.length > 23) {
    shownText = shownText.substring(0, 23) + "...";
  }
  return <Text style={styles.infoText}>{shownText}</Text>;
};

const SettingScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.userInfo);
  const password = useSelector((state) => state.lock.password);
  const hasPassword = !!password;

  const setPassword = () => {
    if (!hasPassword) {
      navigation.navigate("AddAppPassword");
      return;
    }
    navigation.navigate("RemoveAppPassword", {
      currentPassword: password,
    });
  };

  const changePassword = () => {
    if (!hasPassword) {
      Alert.alert("Chưa tạo mã khoá", "Xin vui lòng tạo mã hoá.", [
        {
          text: "Đã hiểu",
        },
      ]);
      return;
    }
    navigation.navigate("ChangeAppPassword", {
      currentPassword: password,
    });
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
          rightContent={<InfoText text={name} />}
        />
        <SettingItem
          title="Email"
          IconComponent={Feather}
          iconName="mail"
          onPress={() => {}}
          rightContent={<InfoText text={email} />}
        />
        <Divider />
        <SettingItem
          title="Bật mã khoá"
          IconComponent={Feather}
          iconName="lock"
          rightContent={
            <Pressable onPress={setPassword}>
              <Switch
                value={hasPassword}
                disabled={true}
                trackColor={{ true: primaryColor }}
              />
            </Pressable>
          }
          onPress={() => {}}
        />
        <SettingItem
          title="Đổi mã khoá"
          IconComponent={Feather}
          iconName="unlock"
          onPress={changePassword}
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
      <SettingAction
        text="Đăng xuất"
        color="red"
        onPress={() => {
          dispatch(logOut());
        }}
      />
      <SettingSpace />
      <SettingAction text="Xoá tài khoản" color="red" onPress={() => {}} />
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
  infoText: {
    fontFamily: "nunito",
    color: commonTextColor,
    fontSize: 12.5,
  },
});

export default SettingScreen;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import { logOut } from "../store/actions/auth";
import { navigatorHeaderDefaultOptions } from "../constants/navigation";
import { iconBottomSize } from "../constants/styles";
import { menuScreenTitle } from "../constants/screenTitles";
import BodyWrapper from "../components/UI/BodyWrapper";
import HeaderTitle from "../components/UI/HeaderTitle";

const MenuScreen = (props) => {
  const dispatch = useDispatch();
  return (
    <BodyWrapper>
      <HeaderTitle title={menuScreenTitle} />
      <Text
        style={{ color: "red" }}
        onPress={() => {
          dispatch(logOut());
        }}
      >
        Đăng xuất
      </Text>
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    ...navigatorHeaderDefaultOptions,
    headerTitle: "",
    tabBarIcon: ({ color }) => (
      <FontAwesome name="user-circle-o" size={iconBottomSize} color={color} />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {},
});

export default MenuScreen;

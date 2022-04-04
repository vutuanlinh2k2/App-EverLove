import React from "react";
import { StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { navigatorHeaderDefaultOptions } from "../constants/navigation";
import { homeScreenTitle } from "../constants/screenTitles";
import { iconBottomSize } from "../constants/styles";
import BodyWrapper from "../components/UI/BodyWrapper";
import HeaderTitle from "../components/UI/HeaderTitle";
import HeadingText from "../components/UI/HeadingText";
import Divider from "../components/UI/Divider";
import HomeCarousel from "../components/Home/HomeCarousel";
import MemoriesCarousel from "../components/Home/MemoriesCarousel";
import UpcomingEvents from "../components/Home/UpcomingEvents";

const AppLogo = () => {
  return (
    <Image style={styles.appLogo} source={require("../assets/app-logo.png")} />
  );
};

const HomeScreen = (props) => {
  const { navigation } = props;

  const navigateMemoriesScreen = () => {
    navigation.navigate("Memories", {
      screen: "MemoriesMain",
      params: {
        screen: "MemoriesAll",
      },
    });
  };

  const navigateDateCounterScreen = () => {
    navigation.navigate("DateCounter");
  };

  return (
    <BodyWrapper scrollable>
      <HeaderTitle title={homeScreenTitle} logo />
      <HeadingText headerText={"Đếm ngày yêu"} />
      <HomeCarousel onPressItem={navigateDateCounterScreen} />
      <Divider />
      <HeadingText
        headerText={"Kỉ niệm"}
        actionText={"Xem tất cả"}
        action={navigateMemoriesScreen}
      />
      <MemoriesCarousel onNavigateMemoriesScreen={navigateMemoriesScreen} />
      <Divider />
      <HeadingText headerText={"Sự kiện sắp tới"} />
      <UpcomingEvents />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    ...navigatorHeaderDefaultOptions,
    headerTitle: "",
    tabBarIcon: ({ color }) => (
      <Feather name="home" size={iconBottomSize} color={color} />
    ),
  };
};

const styles = StyleSheet.create({
  appLogo: {
    height: 40,
    aspectRatio: 1,
    marginRight: 5,
  },
});

export default HomeScreen;

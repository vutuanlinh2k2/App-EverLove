import React from "react";
import { StyleSheet, Image } from "react-native";

import { homeScreenTitle } from "../../constants/screenTitles";
import BodyWrapper from "../../components/UI/BodyWrapper";
import HeaderTitle from "../../components/UI/HeaderTitle";
import HeadingText from "../../components/UI/HeadingText";
import Divider from "../../components/UI/Divider";
import HomeCarousel from "../../components/Home/Home/HomeCarousel";
import MemoriesCarousel from "../../components/Home/Home/MemoriesCarousel";
import UpcomingEvents from '../../components/Home/Home/UpcomingEvents';

const AppLogo = () => {
  return (
    <Image
      style={styles.appLogo}
      source={require("../../assets/app-logo.png")}
    />
  );
};

const HomeScreen = (props) => {
  const { navigation } = props;
  const dateCounterPressHandler = (index) => {
    navigation.navigate("DateCounter", {
      carouselIndex: index,
    });
  };
  const navigateMemoriesScreen = () => {
    navigation.navigate("Memories");
  };
  return (
    <BodyWrapper>
      <HeaderTitle title={homeScreenTitle} logo />
      <HeadingText headerText={"Đếm ngày yêu"} />
      <HomeCarousel onPressItem={dateCounterPressHandler} />
      <Divider />
      <HeadingText
        headerText={"Kỉ niệm"}
        actionText={"Xem thêm"}
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
    headerTitle: "",
  };
};

const styles = StyleSheet.create({
  appLogo: {
    height: 40,
    aspectRatio: 1,
    marginRight: 5
  },
});

export default HomeScreen;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { homeScreenTitle } from "../../constants/screenTitles";
import { primaryColor } from "../../constants/colors";
import BodyWrapper from "../../components/UI/BodyWrapper";
import HeaderTitle from "../../components/UI/HeaderTitle";
import HeadingText from "../../components/UI/HeadingText";
import HomeCarousel from "../../components/Home/Home/HomeCarousel";

const HomeScreen = (props) => {
  const { navigation } = props;
  const carouselItemPressHandler = (index) => {
    navigation.navigate("DateCounter", {
      carouselIndex: index,
    });
  };
  return (
    <BodyWrapper>
      <HeaderTitle title={homeScreenTitle} />
      <HeadingText text={"Đếm ngày yêu"} />
      <HomeCarousel onPressItem={carouselItemPressHandler} />
      <HeadingText text={"Kỉ niệm"} />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "",
  };
};

const styles = StyleSheet.create({});

export default HomeScreen;

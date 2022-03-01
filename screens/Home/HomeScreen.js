import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { homeScreenTitle } from "../../constants/screenTitles";
import BodyWrapper from "../../components/UI/BodyWrapper";
import HeaderTitle from "../../components/UI/HeaderTitle";
import HeadingText from "../../components/UI/HeadingText";
import HomeBanner from "../../components/Home/HomeBanner";

const HomeScreen = (props) => {
  return (
    <BodyWrapper>
      <HeaderTitle title={homeScreenTitle} />
      <HeadingText text={"Đếm ngày yêu"} />
      <HomeBanner numOfDays={200} loverName={"Sam"} />
      <HeadingText text={"Kỉ niệm"} />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "",
  };
};

const styles = StyleSheet.create({
  screen: {},
});

export default HomeScreen;

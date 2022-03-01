import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { homeScreenTitle } from "../../constants/screenTitles";
import BodyWrapper from "../../components/UI/BodyWrapper";
import HeaderTitle from "../../components/UI/HeaderTitle";

const HomeScreen = (props) => {
  return (
    <BodyWrapper>
      <HeaderTitle title={homeScreenTitle} />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: '',
  };
};

const styles = StyleSheet.create({
  screen: {},
});

export default HomeScreen;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { memoryScreenTitle } from "../../constants/screenTitles";
import BodyWrapper from "../../components/UI/BodyWrapper";
import HeaderTitle from "../../components/UI/HeaderTitle";

const MemoriesScreen = (props) => {
  return (
    <BodyWrapper>
      <HeaderTitle title={memoryScreenTitle} />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    title: memoryScreenTitle,
  };
};

const styles = StyleSheet.create({
  screen: {},
});

export default MemoriesScreen;

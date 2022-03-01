import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { dateCounterScreenTitle } from "../../constants/screenTitles";
import BodyWrapper from "../../components/UI/BodyWrapper";

const DateCounterScreen = (props) => {
  return (
    <BodyWrapper>
      <Text>DateCounterScreen</Text>
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    title: dateCounterScreenTitle,
  };
};

const styles = StyleSheet.create({
  screen: {},
});

export default DateCounterScreen;

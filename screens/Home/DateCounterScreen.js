import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { dateCounterScreenTitle } from "../../constants/screenTitles";

const DateCounterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>DateCounterScreen</Text>
    </View>
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

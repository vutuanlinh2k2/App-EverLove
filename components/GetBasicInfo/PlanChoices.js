import React from "react";
import { View, Text, StyleSheet } from "react-native";

import GoBackButton from "./GoBackButton";

const PlanChoices = (props) => {
  const { goBackItem } = props;
  return (
    <View style={styles.screen}>
      <Text>PlanChoices</Text>
      <GoBackButton onPress={goBackItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default PlanChoices;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ContinueButton from "./UI/ContinueButton";
import GoBackButton from "./UI/GoBackButton";

const GetImages = (props) => {
  const { goBackItem, onGoToNextItem } = props;
  return (
    <View style={styles.screen}>
      <Text>GetImages</Text>
      <ContinueButton onPress={onGoToNextItem} />
      <GoBackButton onPress={goBackItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default GetImages;

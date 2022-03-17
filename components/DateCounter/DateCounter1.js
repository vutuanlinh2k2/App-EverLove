import React from "react";
import { View, StyleSheet } from "react-native";

import { screenWidth } from "../../constants/styles";
import Heart from '../UI/Heart';

const DateCounter1 = (props) => {
  return (
    <View style={styles.dateCounter}>
      <Heart fontSize={22} />
    </View>
  );
};

const styles = StyleSheet.create({
  dateCounter: {
    height: screenWidth - 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
});

export default DateCounter1;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { screenWidth } from "../../constants/styles";

const DateCounter1 = (props) => {
  return (
    <View style={styles.dateCounter}>
      <Image
        style={styles.image}
        source={require("../../assets/heart-2.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>200</Text>
        <Text style={styles.text}>ngày yêu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateCounter: {
    justifyContent: "center",
    alignItems: "center",
    height: screenWidth - 150,
    paddingVertical: 5,
    backgroundColor: "#F9D7D7",
    marginBottom: 12.5,
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: {
      width: -1,
      height: 4,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  textContainer: {
    position: "absolute",
  },
  text: {
    fontFamily: "nunito-black",
    textAlign: "center",
    color: "white",
    fontSize: 22,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
  },
});

export default DateCounter1;

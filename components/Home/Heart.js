import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Heart = (props) => {
  const { fontSize } = props;
  const textStyles = getDynamicStyles(fontSize).text;
  return (
    <>
      <Image
        style={styles.image}
        source={require("../../assets/heart-2.png")}
      />
      <View style={styles.textContainer}>
        <Text style={textStyles}>200</Text>
        <Text style={textStyles}>ngày yêu</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

const getDynamicStyles = (fontSize) => {
  return StyleSheet.create({
    text: {
      fontFamily: "nunito-black",
      textAlign: "center",
      color: "white",
      fontSize,
    },
  });
};

export default Heart;

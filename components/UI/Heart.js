import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useSelector } from "react-redux";

// import { useDateCounterHeart } from "../../hooks/useDateCounter";
import { getLoveDateCount } from "../../utils/dateCounter";
// import LoadingIndicator from "./LoadingIndicator";

const Heart = (props) => {
  const { fontSize } = props;
  const loveDate = useSelector((state) => state.userInfo.loveDate);
  const dateCounter = getLoveDateCount(loveDate);
  const textStyles = getDynamicStyles(fontSize).text;

  // if (!dateCounter) {
  //   return (
  //     <ImageBackground
  //       style={styles.image}
  //       source={require("../../assets/heart-2.png")}
  //     >
  //       <LoadingIndicator white />
  //     </ImageBackground>
  //   );
  // }

  return (
    <>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/heart-2.png")}
      >
        <View style={styles.textContainer}>
          <Text style={textStyles}>{dateCounter}</Text>
          <Text style={textStyles}>ngày yêu</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    // position: "absolute",
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
    justifyContent: "center",
    alignItems: "center",
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

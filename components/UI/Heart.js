import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useSelector } from "react-redux";

// import { useDateCounterHeart } from "../../hooks/useDateCounter";
import { getLoveDateCount } from "../../utils/dateCounter";
import LoadingIndicator from "./LoadingIndicator";

const Heart = (props) => {
  const { fontSize } = props;
  const [isLoading, setIsLoading] = useState(false);
  const loveDate = useSelector((state) => state.userInfo.loveDate);
  const dateCounter = getLoveDateCount(loveDate);
  const textStyles = getDynamicStyles(fontSize).text;

  return (
    <>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/heart-2.png")}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
      >
        {!isLoading ? (
          <View style={styles.textContainer}>
            <Text style={textStyles}>{dateCounter}</Text>
            <Text style={textStyles}>ngày yêu</Text>
          </View>
        ) : (
          <LoadingIndicator />
        )}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
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
  loadingContainer: {
    flex: 1,
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

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { accentColor, primaryColor, greyColor } from "../../constants/colors";
import { appPaddingHorizontal } from "../../constants/styles";
// import { useGetCoupleInfo } from "../../hooks/useDateCounter";
import Zodiac from "./Zodiac";
// import LoadingIndicator from "../UI/LoadingIndicator";

const PersonInfo = (props) => {
  const { name, imageUrl, gender, zodiac } = props;
  const [isImageLoading, setIsImageLoading] = useState(false);
  const imageDefault =
    gender === "male"
      ? require("../../assets/boy.png")
      : require("../../assets/girl.png");
  return (
    <View style={styles.personInfo}>
      <ImageBackground
        style={styles.image}
        source={imageUrl ? { uri: imageUrl } : imageDefault}
        onLoadStart={() => {
          setIsImageLoading(true);
        }}
        onLoadEnd={() => {
          setIsImageLoading(false);
        }}
      >
        {isImageLoading && <View style={styles.imagePlaceholder} />}
      </ImageBackground>
      <Text style={styles.personName}>{name}</Text>
      <View style={styles.extraInfo}>
        <View style={styles.personGender}>
          <MaterialCommunityIcons
            name={gender === "male" ? "gender-male" : "gender-female"}
            size={18}
            color={primaryColor}
          />
        </View>
        <Zodiac zodiac={zodiac} />
      </View>
    </View>
  );
};

const CoupleInfo = (props) => {
  // const coupleInfo = useGetCoupleInfo();
  const userInfo = useSelector((state) => state.userInfo);

  // if (!coupleInfo) {
  //   return (
  //     <View style={{ justifyContent: "center", alignItems: "center" }}>
  //       <LoadingIndicator />
  //     </View>
  //   );
  // }

  const {
    name,
    nickname,
    gender,
    image,
    zodiac,
    partnerGender,
    partnerImage,
    partnerName,
    partnerNickname,
    partnerZodiac,
  } = userInfo;

  return (
    <View style={styles.coupleInfo}>
      <PersonInfo
        name={nickname === "" ? name : nickname}
        imageUrl={image}
        gender={gender}
        zodiac={zodiac}
      />
      <PersonInfo
        name={partnerNickname === "" ? partnerName : partnerNickname}
        imageUrl={partnerImage}
        gender={partnerGender}
        zodiac={partnerZodiac}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  coupleInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: appPaddingHorizontal,
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    borderWidth: 5,
    borderColor: accentColor,
    overflow: "hidden",
  },
  imagePlaceholder: {
    flex: 1,
    backgroundColor: greyColor,
  },
  personInfo: {
    flex: 1,
    alignItems: "center",
  },
  personName: {
    textAlign: "center",
    fontFamily: "nunito-bold",
    marginTop: 7.5,
  },
  extraInfo: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  personGender: {
    backgroundColor: greyColor,
    padding: 3,
    width: 30,
    aspectRatio: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});

export default CoupleInfo;

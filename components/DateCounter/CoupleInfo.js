import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { accentColor, primaryColor } from "../../constants/colors";
import { useGetCoupleInfo } from "../../hooks/useDateCounter";
import Zodiac from './Zodiac';
import LoadingIndicator from "../UI/LoadingIndicator";

const PersonInfo = (props) => {
  const { name, imageUrl, gender, zodiac } = props;
  const imageDefault =
    gender === "male"
      ? require("../../assets/boy.png")
      : require("../../assets/girl.png");
  return (
    <View style={styles.personInfo}>
      <Image
        style={styles.image}
        source={imageUrl ? { uri: imageUrl } : imageDefault}
      />
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
  const coupleInfo = useGetCoupleInfo();

  if (!coupleInfo) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <LoadingIndicator />
      </View>
    );
  }

  const {
    name,
    gender,
    image,
    zodiac,
    partnerGender,
    partnerImage,
    partnerName,
    partnerZodiac,
  } = coupleInfo;

  return (
    <View style={styles.coupleInfo}>
      <PersonInfo
        name={name}
        imageUrl={image}
        gender={gender}
        zodiac={zodiac}
      />
      <PersonInfo
        name={partnerName}
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
    paddingHorizontal: 20,
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    borderWidth: 5,
    borderColor: accentColor,
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
    backgroundColor: "#eee",
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

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { primaryColor, greyColor } from "../../constants/colors";

const Zodiac = (props) => {
  const { zodiac } = props;
  const iconName = `zodiac-${zodiac.toLowerCase()}`;
  let zodiacText;
  switch (zodiac) {
    case "Aries":
      zodiacText = "Bạch Dương";
      break;
    case "Taurus":
      zodiacText = "Kim Ngưu";
      break;
    case "Gemini":
      zodiacText = "Song Tử";
      break;
    case "Cancer":
      zodiacText = "Cự Giải";
      break;
    case "Leo":
      zodiacText = "Sư Tử";
      break;
    case "Virgo":
      zodiacText = "Xử Nữ";
      break;
    case "Libra":
      zodiacText = "Thiên Bình";
      break;
    case "Scorpio":
      zodiacText = "Thiên Yết";
      break;
    case "Sagittarius":
      zodiacText = "Nhân Mã ";
      break;
    case "Capricorn":
      zodiacText = "Ma Kết";
      break;
    case "Aquarius":
      zodiacText = "Bảo Bình";
      break;
    case "Pisces":
      zodiacText = "Song Ngư";
      break;
    default:
      zodiacText = "";
  }

  return (
    <View style={styles.zodiacContainer}>
      <MaterialCommunityIcons name={iconName} color={primaryColor} size={18} />
      <Text style={styles.text}>{zodiacText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  zodiacContainer: {
    height: 30,
    borderRadius: 15,
    backgroundColor: greyColor,
    paddingTop: 3,
    paddingHorizontal: 7.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "nunito",
    fontSize: 9,
    marginLeft: 2.5
  },
});

export default Zodiac;

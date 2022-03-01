import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { homeScreenTitle } from "../../constants/screenTitles";
import { primaryColor } from "../../constants/colors";
import BodyWrapper from "../../components/UI/BodyWrapper";
import HeaderTitle from "../../components/UI/HeaderTitle";
import HeadingText from "../../components/UI/HeadingText";
import DateCounterCarousel from '../../components/Home/DateCounterCarousel';

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <BodyWrapper>
      <HeaderTitle title={homeScreenTitle} />
      <View style={styles.heading}>
        <HeadingText text={"Đếm ngày yêu"} />
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("DateCounter");
          }}
        >
          Xem thêm
        </Text>
      </View>
      <DateCounterCarousel />
      <HeadingText text={"Kỉ niệm"} />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "",
  };
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  text: {
    color: primaryColor,
    fontFamily: 'nunito'
  },
});

export default HomeScreen;

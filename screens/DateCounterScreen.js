import React from "react";
import { View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { navigatorHeaderDefaultOptions } from "../constants/navigation";
import { dateCounterScreenTitle } from "../constants/screenTitles";
import { screenHeight, iconBottomSize } from "../constants/styles";
import { backgroundColor } from "../constants/colors";
import BodyWrapper from "../components/UI/BodyWrapper";
import HeaderButton from "../components/UI/HeaderButton";
import DateCounterCarousel from "../components/DateCounter/DateCounterCarousel";
import CoupleInfo from "../components/DateCounter/CoupleInfo";

const DateCounterScreen = (props) => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{ backgroundColor, flex: 1 }}>
      <View
        style={{
          justifyContent: "space-around",
          height: screenHeight - tabBarHeight - 100,
        }}
      >
        <DateCounterCarousel />
        <CoupleInfo />
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    ...navigatorHeaderDefaultOptions,
    title: dateCounterScreenTitle,
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons
        name="calendar-heart"
        size={iconBottomSize}
        color={color}
      />
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Share" iconName="share-outline" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

export default DateCounterScreen;

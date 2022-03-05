import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { homeScreenTitle } from "../../constants/screenTitles";
import { screenHeight } from "../../constants/styles";
import BodyWrapper from "../../components/UI/BodyWrapper";
import HeaderButton from "../../components/UI/HeaderButton";
import DateCounterCarousel from "../../components/Home/DateCounter/DateCounterCarousel";
import CoupleInfo from "../../components/Home/DateCounter/CoupleInfo";

const DateCounterScreen = (props) => {
  const { route } = props;
  const { carouselIndex } = route.params;
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <BodyWrapper>
      <View
        style={{
          justifyContent: "space-around",
          height: screenHeight - tabBarHeight - 100,
        }}
      >
        <DateCounterCarousel initialIndex={carouselIndex} />
        <CoupleInfo />
      </View>
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    title: homeScreenTitle,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Back"
          iconName="arrow-back-outline"
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Share" iconName="share-outline" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  bodyContainer: {
    justifyContent: "space-around",
    // backgroundColor: 'red',
    height: screenHeight - 165,
  },
});

export default DateCounterScreen;

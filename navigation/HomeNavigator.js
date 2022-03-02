import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { stackNavigatorDefaultOptions } from "../constants/navigation";
import HomeScreen, {
  screenOptions as homeScreenOptions,
} from "../screens/Home/HomeScreen";
import DateCounterScreen, {
  screenOptions as dateCounterScreenOptions,
} from "../screens/Home/DateCounterScreen";

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="HomeMain"
      screenOptions={{
        ...stackNavigatorDefaultOptions,
      }}
    >
      <HomeStackNavigator.Screen
        name="HomeMain"
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <HomeStackNavigator.Screen
        name="DateCounter"
        component={DateCounterScreen}
        options={dateCounterScreenOptions}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigator;

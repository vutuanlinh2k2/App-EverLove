import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home/HomeScreen";
import DateCounterScreen from "../screens/Home/DateCounterScreen";

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeMain">
      <HomeStackNavigator.Screen name="HomeMain" component={HomeScreen} />
      <HomeStackNavigator.Screen
        name="DateCounter"
        component={DateCounterScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigator;

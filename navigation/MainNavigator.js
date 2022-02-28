import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import MemoriesNavigator from "./MemoriesNavigator";

const MainBottomTabNavigator = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainBottomTabNavigator.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
    }}>
      <MainBottomTabNavigator.Screen name="Home" component={HomeNavigator} />
      <MainBottomTabNavigator.Screen
        name="Memories"
        component={MemoriesNavigator}
      />
    </MainBottomTabNavigator.Navigator>
  );
};

export default MainNavigator;

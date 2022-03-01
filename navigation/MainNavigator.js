import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { memoryScreenTitle } from "../constants/screenTitles";
import { primaryColor } from "../constants/colors";
import HomeNavigator from "./HomeNavigator";
import MemoriesNavigator from "./MemoriesNavigator";

const MainBottomTabNavigator = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainBottomTabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primaryColor,
        tabBarLabelStyle: {
          fontFamily: "nunito",
        },
      }}
    >
      <MainBottomTabNavigator.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <MainBottomTabNavigator.Screen
        name="Memories"
        component={MemoriesNavigator}
        options={{
          title: memoryScreenTitle,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
        }}
      />
    </MainBottomTabNavigator.Navigator>
  );
};

export default MainNavigator;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { memoryScreenTitle } from "../constants/screenTitles";
import { primaryColor, backgroundColor } from "../constants/colors";
import HomeNavigator from "./HomeNavigator";
import MemoriesNavigator from "./Memories/MemoriesNavigator";

const MainBottomTabNavigator = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainBottomTabNavigator.Navigator
      initialRouteName="Memories"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: primaryColor,
        tabBarLabelStyle: {
          fontFamily: "nunito",
        },
        tabBarStyle: {
          backgroundColor: backgroundColor,
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
            <Ionicons name="image" size={size} color={color} />
          ),
        }}
      />
    </MainBottomTabNavigator.Navigator>
  );
};

export default MainNavigator;

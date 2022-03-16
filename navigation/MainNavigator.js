import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

import { memoryScreenTitle } from "../constants/screenTitles";
import { primaryColor, backgroundColor } from "../constants/colors";
import HomeNavigator from "./HomeNavigator";
import MemoriesNavigator from "./Memories/MemoriesNavigator";
import AddMemoryScreen, {
  screenOptions as addMemoryScreenOptions,
} from "../screens/AddMemoryScreen";

const MainBottomTabNavigator = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainBottomTabNavigator.Navigator
      initialRouteName="Home"
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
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <MainBottomTabNavigator.Screen
        name="AddMemory"
        component={AddMemoryScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="add-circle-sharp" size={45} color={primaryColor} />
          ),
        }}
      />
      <MainBottomTabNavigator.Screen
        name="Memories"
        component={MemoriesNavigator}
        options={{
          title: memoryScreenTitle,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="event" size={size} color={color} />
          ),
        }}
      />
    </MainBottomTabNavigator.Navigator>
  );
};

export default MainNavigator;

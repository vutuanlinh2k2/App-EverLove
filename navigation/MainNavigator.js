import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import { iconBottomSize } from "../constants/styles";
import { primaryColor, backgroundColor } from "../constants/colors";
import HomeScreen, {
  screenOptions as homeScreenOptions,
} from "../screens/HomeScreen";
import DateCounterScreen, {
  screenOptions as dateCounterScreenOptions,
} from "../screens/DateCounterScreen";
import AddMemoryScreen, {
  screenOptions as addMemoryScreenOptions,
} from "../screens/AddMemoryScreen";
import MemoriesNavigator from "./Memories/MemoriesNavigator";
import MenuScreen, {
  screenOptions as menuScreenOptions,
} from "../screens/MenuScreen";

const MainBottomTabNavigator = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainBottomTabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
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
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <MainBottomTabNavigator.Screen
        name="DateCounter"
        component={DateCounterScreen}
        options={dateCounterScreenOptions}
      />
      <MainBottomTabNavigator.Screen
        name="AddMemory"
        component={AddMemoryScreen}
        options={addMemoryScreenOptions}
      />
      <MainBottomTabNavigator.Screen
        name="Memories"
        component={MemoriesNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="image" size={iconBottomSize} color={color} />
          ),
        }}
      />
      <MainBottomTabNavigator.Screen
        name="Setting"
        component={MenuScreen}
        options={menuScreenOptions}
      />
    </MainBottomTabNavigator.Navigator>
  );
};

export default MainNavigator;

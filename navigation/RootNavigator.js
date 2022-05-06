import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

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
import EditMemoryScreen, {
  screenOptions as editMemoryScreenOptions,
} from "../screens/EditMemoryScreen";
import MemoriesNavigator from "./Memories/MemoriesNavigator";
import MenuScreen, {
  screenOptions as menuScreenOptions,
} from "../screens/MenuScreen";
import ChangeBasicInfoScreen, {
  screenOptions as changeBasicInfoScreenOptions,
} from "../screens/ChangeBasicInfoScreen";

const Placeholder = () => <View style={{ flex: 1, backgroundColor: "red" }} />;

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
        name="AddMemoryMain"
        component={Placeholder}
        options={{
          tabBarIcon: () => (
            <Ionicons name="add-circle-sharp" size={45} color={primaryColor} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("AddMemory", { isEmpty: true });
          },
        })}
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

const RootStackNavigator = createStackNavigator();
const RootNavigator = () => {
  return (
    <RootStackNavigator.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
      }}
    >
      <RootStackNavigator.Screen
        name="main"
        component={MainNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStackNavigator.Screen
        name="AddMemory"
        component={AddMemoryScreen}
        options={addMemoryScreenOptions}
      />
      <RootStackNavigator.Screen
        name="EditMemory"
        component={EditMemoryScreen}
        options={editMemoryScreenOptions}
      />
      <RootStackNavigator.Screen
        name="ChangeBasicInfo"
        component={ChangeBasicInfoScreen}
        options={changeBasicInfoScreenOptions}
      />
    </RootStackNavigator.Navigator>
  );
};

export default RootNavigator;

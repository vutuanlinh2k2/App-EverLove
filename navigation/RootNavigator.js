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
import SettingScreen, {
  screenOptions as settingScreenOptions,
} from "../screens/SettingScreen";
import ChangeBasicInfoScreen, {
  screenOptions as changeBasicInfoScreenOptions,
} from "../screens/ChangeBasicInfoScreen";
import AddAppPasswordScreen, {
  screenOptions as addAppPasswordScreenOptions,
} from "../screens/Lock/AddAppPasswordScreen";
import RemoveAppPasswordScreen, {
  screenOptions as removeAppPasswordScreenOptions,
} from "../screens/Lock/RemoveAppPasswordScreen";
import ChangeAppPasswordScreen, {
  screenOptions as changeAppPasswordScreenOptions,
} from "../screens/Lock/ChangeAppPasswordScreen";

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
        component={SettingScreen}
        options={settingScreenOptions}
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
      <RootStackNavigator.Screen
        name="AddAppPassword"
        component={AddAppPasswordScreen}
        options={addAppPasswordScreenOptions}
      />
      <RootStackNavigator.Screen
        name="RemoveAppPassword"
        component={RemoveAppPasswordScreen}
        options={removeAppPasswordScreenOptions}
      />
      <RootStackNavigator.Screen
        name="ChangeAppPassword"
        component={ChangeAppPasswordScreen}
        options={changeAppPasswordScreenOptions}
      />
    </RootStackNavigator.Navigator>
  );
};

export default RootNavigator;

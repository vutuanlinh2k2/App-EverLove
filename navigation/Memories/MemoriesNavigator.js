import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stackNavigatorDefaultOptions } from "../../constants/navigation";
import {memoryScreenTitle} from '../../constants/screenTitles';
import MemoriesMainNavigator from "./MemoriesMainNavigator";
import MemoriesDayScreen from "../../screens/Memories/MemoriesDayScreen";
import MemoriesMonthScreen from "../../screens/Memories/MemoriesMonthScreen";
import MemoriesYearScreen from "../../screens/Memories/MemoriesYearScreen";

const MemoriesStackNavigator = createStackNavigator();

const MemoriesNavigator = () => {
  return (
    <MemoriesStackNavigator.Navigator
      initialRouteName="MemoriesMain"
      screenOptions={{
        ...stackNavigatorDefaultOptions,
        title: memoryScreenTitle
      }}
    >
      <MemoriesStackNavigator.Screen
        name="MemoriesMain"
        component={MemoriesMainNavigator}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesDay"
        component={MemoriesDayScreen}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesMonth"
        component={MemoriesMonthScreen}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesYear"
        component={MemoriesYearScreen}
      />
    </MemoriesStackNavigator.Navigator>
  );
};

export default MemoriesNavigator;

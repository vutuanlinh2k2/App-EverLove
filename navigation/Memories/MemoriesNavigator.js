import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stackNavigatorDefaultOptions } from "../../constants/navigation";
import { memoryScreenTitle } from "../../constants/screenTitles";
import MemoriesMainNavigator from "./MemoriesMainNavigator";
import MemoriesDayScreen, {
  screenOptions as memoriesDayScreenOptions,
} from "../../screens/Memories/MemoriesDayScreen";
import MemoriesMonthScreen, {
  screenOptions as memoriesMonthScreenOptions,
} from "../../screens/Memories/MemoriesMonthScreen";
import MemoriesYearScreen from "../../screens/Memories/MemoriesYearScreen";
import MemoryDetailScreen from '../../screens/Memories/MemoryDetailScreen';
import MemoriesItemScreen from '../../screens/Memories/MemoriesItemsScreen';

const MemoriesStackNavigator = createStackNavigator();

const MemoriesNavigator = () => {
  return (
    <MemoriesStackNavigator.Navigator
      initialRouteName="MemoriesMain"
      screenOptions={{
        ...stackNavigatorDefaultOptions,
        title: memoryScreenTitle,
      }}
    >
      <MemoriesStackNavigator.Screen
        name="MemoriesMain"
        component={MemoriesMainNavigator}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesDay"
        component={MemoriesDayScreen}
        options={memoriesDayScreenOptions}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesMonth"
        component={MemoriesMonthScreen}
        options={memoriesMonthScreenOptions}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesYear"
        component={MemoriesYearScreen}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesItems"
        component={MemoriesItemScreen}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesDetail"
        component={MemoryDetailScreen}
      />
    </MemoriesStackNavigator.Navigator>
  );
};

export default MemoriesNavigator;

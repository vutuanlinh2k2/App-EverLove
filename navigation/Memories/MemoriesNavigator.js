import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { navigatorHeaderDefaultOptions } from "../../constants/navigation";
import { memoryScreenTitle } from "../../constants/screenTitles";
import MemoriesMainNavigator from "./MemoriesMainNavigator";
import MemoriesFilterByDayScreen, {
  screenOptions as memoriesFilterByDayScreenOptions,
} from "../../screens/Memories/MemoriesFilterByDayScreen";
import MemoriesFilterByMonthScreen, {
  screenOptions as memoriesFilterByMonthScreenOptions,
} from "../../screens/Memories/MemoriesFilterByMonthScreen";
import MemoriesFilterByYearScreen, {
  screenOptions as memoriesFilterByYearScreenOptions,
} from "../../screens/Memories/MemoriesFilterByYearScreen";

const MemoriesStackNavigator = createStackNavigator();

const MemoriesNavigator = () => {
  return (
    <MemoriesStackNavigator.Navigator
      initialRouteName="MemoriesMain"
      screenOptions={{
        ...navigatorHeaderDefaultOptions,
        title: memoryScreenTitle,
      }}
    >
      <MemoriesStackNavigator.Screen
        name="MemoriesMain"
        component={MemoriesMainNavigator}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesFilterDay"
        component={MemoriesFilterByDayScreen}
        options={memoriesFilterByDayScreenOptions}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesFilterMonth"
        component={MemoriesFilterByMonthScreen}
        options={memoriesFilterByMonthScreenOptions}
      />
      <MemoriesStackNavigator.Screen
        name="MemoriesFilterYear"
        component={MemoriesFilterByYearScreen}
        options={memoriesFilterByYearScreenOptions}
      />
    </MemoriesStackNavigator.Navigator>
  );
};

export default MemoriesNavigator;

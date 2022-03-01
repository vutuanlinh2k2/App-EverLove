import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stackNavigatorDefaultOptions } from "../constants/navigation";
import MemoriesScreen, {
  screenOptions as memoryScreenOptions,
} from "../screens/Memories/MemoriesScreen";

const MemoriesStackNavigator = createStackNavigator();

const HomeNavigator = () => {
  return (
    <MemoriesStackNavigator.Navigator
      initialRouteName="MemoriesMain"
      screenOptions={{
        ...stackNavigatorDefaultOptions,
      }}
    >
      <MemoriesStackNavigator.Screen
        name="MemoriesMain"
        component={MemoriesScreen}
        options={memoryScreenOptions}
      />
    </MemoriesStackNavigator.Navigator>
  );
};

export default HomeNavigator;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { stackNavigatorDefaultOptions } from "../constants/navigation";
import MemoriesScreen, {
  screenOptions as memoriesScreenOptions,
} from "../screens/Memories/MemoriesScreen";
import MemoryDetailScreen, {
  screenOptions as memoryDetailScreenOptions,
} from "../screens/Memories/MemoryDetailScreen";

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
        options={memoriesScreenOptions}
      />
      <MemoriesStackNavigator.Screen
        name="MemoryDetail"
        component={MemoryDetailScreen}
        options={memoryDetailScreenOptions}
      />
    </MemoriesStackNavigator.Navigator>
  );
};

export default HomeNavigator;

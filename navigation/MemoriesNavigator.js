import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MemoriesScreen from "../screens/Memories/MemoriesScreen";

const MemoriesStackNavigator = createStackNavigator();

const HomeNavigator = () => {
  return (
    <MemoriesStackNavigator.Navigator initialRouteName="MemoriesMain">
      <MemoriesStackNavigator.Screen
        name="MemoriesMain"
        component={MemoriesScreen}
      />
    </MemoriesStackNavigator.Navigator>
  );
};

export default HomeNavigator;

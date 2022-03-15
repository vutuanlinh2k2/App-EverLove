import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthScreen from '../screens/AuthScreen';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthScreen />
      {/* <MainNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;

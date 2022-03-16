import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";

const AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.auth.userId);
  return (
    <NavigationContainer>
      {!isAuth && <AuthScreen />}
      {isAuth && <MainNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

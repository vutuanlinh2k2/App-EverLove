import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";
import StartUpScreen from "../screens/StartUpScreen";

const AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.auth.userId);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);
  
  return (
    <NavigationContainer>
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {isAuth && <MainNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

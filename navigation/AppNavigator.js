import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";
import StartUpScreen from "../screens/StartUpScreen";
import GetBasicInfoScreen from "../screens/GetBasicInfoScreen";

const AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.auth.userId);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);
  const userInfoExisted = useSelector((state) => state.auth.userInfoExisted);

  return (
    <NavigationContainer>
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {isAuth && !userInfoExisted && <GetBasicInfoScreen />}
      {isAuth && userInfoExisted && <MainNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

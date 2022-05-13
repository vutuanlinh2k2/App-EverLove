import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./RootNavigator";
import AuthNavigator from "./AuthNavigator";
import StartUpScreen from "../screens/StartUpScreen";
import GetBasicInfoScreen from "../screens/GetBasicInfoScreen";
import UnlockAppScreen from "../screens/Lock/UnlockAppScreen";

const AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.auth.userId);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);
  const userInfoExisted = useSelector((state) => !!state.userInfo.name);
  const { password, tryUnlock } = useSelector((state) => state.lock);
  const unlocked = !password || (password && tryUnlock);

  return (
    <NavigationContainer>
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {isAuth && !userInfoExisted && <GetBasicInfoScreen />}
      {isAuth && userInfoExisted && !unlocked && (
        <UnlockAppScreen currentPassword={password} />
      )}
      {isAuth && userInfoExisted && unlocked && <MainNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

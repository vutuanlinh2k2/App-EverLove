import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthScreen from "../screens/AuthScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      initialRouteName="AuthMain"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStackNavigator.Screen
        name="AuthMain"
        component={AuthScreen}
      />
      <AuthStackNavigator.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        // options={memoriesFilterByDayScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;

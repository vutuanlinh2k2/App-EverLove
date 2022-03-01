import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import AppNavigator from "./navigation/AppNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

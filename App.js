import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import AppNavigator from "./navigation/AppNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    'fredoka-bold': require('./assets/fonts/Fredoka-Bold.ttf'),
    'fredoka': require('./assets/fonts/Fredoka-Regular.ttf'),
    'fredoka-semibold': require('./assets/fonts/Fredoka-SemiBold.ttf'),
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

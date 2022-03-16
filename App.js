import React, { useState } from "react";
import { LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import AppNavigator from "./navigation/AppNavigator";
import authReducer from "./store/reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release.']);

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-black": require("./assets/fonts/Nunito-Black.ttf"),
    nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
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
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

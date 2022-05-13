import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { backgroundColor } from "../../constants/colors";
import PinView from "../../components/Lock/PinView";
import CloseIcon from "../../components/Lock/CloseIcon";
import { setAppPassword } from "../../store/actions/lock";

const AddAppPasswordScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const [enteredPin, setEnteredPin] = useState("");

  const goBack = () => {
    navigation.goBack();
  };

  const addPassword = () => {
    dispatch(setAppPassword(enteredPin));
    goBack();
  };

  return (
    <View style={styles.screen}>
      <CloseIcon onPress={goBack} />
      <PinView
        title={"Chọn mật khẩu"}
        onFinish={addPassword}
        enteredPin={enteredPin}
        setEnteredPin={setEnteredPin}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    presentation: "modal",
    headerShown: false,
    gestureEnabled: false,
  };
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
});

export default AddAppPasswordScreen;

import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";

import { backgroundColor } from "../../constants/colors";
import PinView from "../../components/Lock/PinView";
import { setTryUnlock } from "../../store/actions/lock";

const UnlockAppScreen = (props) => {
  const { currentPassword } = props;
  const dispatch = useDispatch();

  const [enteredPin, setEnteredPin] = useState("");

  const removePassword = async () => {
    if (enteredPin !== currentPassword) {
      Alert.alert("Sai mật khẩu", "Không khớp mật khẩu bạn đã đặt.", [
        {
          text: "Đã hiểu",
        },
      ]);
      return;
    }
    await dispatch(setTryUnlock());
  };

  return (
    <View style={styles.screen}>
      <PinView
        title={"Nhập mật khẩu"}
        onFinish={removePassword}
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
  };
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
});

export default UnlockAppScreen;

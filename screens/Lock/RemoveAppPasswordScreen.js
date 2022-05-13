import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";

import { backgroundColor } from "../../constants/colors";
import PinView from "../../components/Lock/PinView";
import CloseIcon from "../../components/Lock/CloseIcon";
import { removeAppPassword } from "../../store/actions/lock";

const RemoveAppPasswordScreen = (props) => {
  const { navigation, route } = props;
  const dispatch = useDispatch();

  const [enteredPin, setEnteredPin] = useState("");
  const currentPassword = route.params.currentPassword;

  const goBack = () => {
    navigation.goBack();
  };

  const removePassword = async () => {
    if (enteredPin !== currentPassword) {
      Alert.alert("Sai mật khẩu", "Không khớp mật khẩu bạn đã đặt.", [
        {
          text: "Đã hiểu",
        },
      ]);
      return;
    }
    await dispatch(removeAppPassword());
    goBack();
  };

  return (
    <View style={styles.screen}>
      <CloseIcon onPress={goBack} />
      <PinView
        title={"Nhập mật khẩu hiện tại"}
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

export default RemoveAppPasswordScreen;

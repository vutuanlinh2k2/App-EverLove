import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReactNativePinView from "react-native-pin-view";

import {
  greyColor,
  commonTextColor,
  primaryColor,
} from "../../constants/colors";
import { appPaddingHorizontal } from "../../constants/styles";

const BUTTON_NUMBER_SIZE = 80;

const PinView = (props) => {
  const { onFinish, title, enteredPin, setEnteredPin } = props;
  const pinViewRef = useRef();
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [showCompletedButton, setShowCompletedButton] = useState(false);

  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ReactNativePinView
        inputSize={30}
        ref={pinViewRef}
        activeOpacity={0.6}
        pinLength={4}
        onValueChange={(value) => setEnteredPin(value)}
        buttonAreaStyle={styles.buttonArea}
        inputAreaStyle={{
          marginBottom: 10,
        }}
        inputViewEmptyStyle={{
          backgroundColor: greyColor,
          //   borderWidth: 1,
        }}
        inputViewFilledStyle={{
          backgroundColor: primaryColor,
          //   borderWidth: 1,
        }}
        buttonViewStyle={styles.numberButton}
        buttonTextStyle={styles.numberButtonText}
        onButtonPress={(key) => {
          if (key === "custom_left") {
            pinViewRef.current.clear();
          }
          if (key === "custom_right") {
          }
        }}
        customLeftButton={
          showRemoveButton ? (
            <Ionicons name="backspace" size={45} color={commonTextColor} />
          ) : null
        }
        customRightButton={
          showCompletedButton ? (
            <Text style={styles.finishText} onPress={onFinish}>
              Xong
            </Text>
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontFamily: "nunito-bold",
    textAlign: "center",
    marginHorizontal: appPaddingHorizontal,
  },
  buttonArea: {
    marginTop: 24,
    width: "85%",
  },
  numberButton: {
    borderWidth: 1,
    borderColor: commonTextColor,
    height: BUTTON_NUMBER_SIZE,
    aspectRatio: 1,
    borderRadius: BUTTON_NUMBER_SIZE / 2,
  },
  numberButtonText: {
    color: commonTextColor,
    fontFamily: "nunito-bold",
  },
  finishText: {
    fontFamily: "nunito",
    color: primaryColor,
    fontSize: 16,
  },
});

export default PinView;

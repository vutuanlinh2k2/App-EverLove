import React, { useState, useMemo, useRef, useCallback } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useDispatch } from "react-redux";

import { backgroundColor } from "../../constants/colors";
import { screenWidth } from "../../constants/styles";
import PinView from "../../components/Lock/PinView";
import CloseIcon from "../../components/Lock/CloseIcon";
import { setAppPassword } from "../../store/actions/lock";

const renderItem = ({ item: component, _ }) => {
  return component;
};

const ChangeAppPasswordScreen = (props) => {
  const { navigation, route } = props;
  const currentPassword = route.params.currentPassword;
  const dispatch = useDispatch();

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");

  const carouselRef = useRef();

  const goBack = () => {
    navigation.goBack();
  };

  const cancelChange = () => {
    if (carouselIndex === 1) {
      Alert.alert("Huỷ đổi mã khoá", "Bạn không muốn đổi mã khoá nữa?", [
        {
          text: "Huỷ",
          onPress: () => {
            navigation.goBack();
          },
          style: "cancel",
        },
        {
          text: "Tiếp tục",
        },
      ]);
      return;
    }
    goBack();
  };

  const goToNextItem = useCallback(() => {
    if (currentPin !== currentPassword) {
      Alert.alert("Sai mật khẩu", "Không khớp mật khẩu bạn đã đặt.", [
        {
          text: "Đã hiểu",
        },
      ]);
      return;
    }
    carouselRef.current.snapToNext();
  }, [currentPin, currentPassword]);

  const updatePassword = () => {
    dispatch(setAppPassword(newPin));
    goBack();
  };

  const carouselItems = useMemo(
    () => [
      <PinView
        title={"Nhập mật khẩu hiện tại"}
        onFinish={goToNextItem}
        enteredPin={currentPin}
        setEnteredPin={setCurrentPin}
      />,
      <PinView
        title={"Nhập mật khẩu mới"}
        onFinish={updatePassword}
        enteredPin={newPin}
        setEnteredPin={setNewPin}
      />,
    ],
    [PinView, currentPin, setCurrentPin, newPin, setNewPin]
  );

  return (
    <View style={styles.screen}>
      <CloseIcon onPress={cancelChange} />
      <Carousel
        ref={carouselRef}
        layout={"default"}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        firstItem={0}
        inactiveSlideScale={1}
        scrollEnabled={false}
        onSnapToItem={(index) => {
          setCarouselIndex(index);
        }}
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
    flex: 1,
    backgroundColor: backgroundColor,
  },
});

export default ChangeAppPasswordScreen;

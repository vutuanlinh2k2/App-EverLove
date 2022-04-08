import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Keyboard, Alert } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { primaryColor, backgroundColor } from "../constants/colors";
import { appPaddingHorizontal } from "../constants/styles";
import HeaderButton from "../components/UI/HeaderButton";
import Divider from "../components/UI/Divider";
import AddMemoryForm from "../components/AddMemory/AddMemoryForm";
import AddMemoryImages from "../components/AddMemory/AddMemoryImages";

const AddMemoryScreen = (props) => {
  const { navigation } = props;

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <AddMemoryImages />
      <View style={{ paddingHorizontal: appPaddingHorizontal }}>
        <Divider />
        <AddMemoryForm />
      </View>
    </KeyboardAwareScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    presentation: "modal",
    title: "Lưu kỷ niệm",
    gestureEnabled: false,
    headerStyle: {
      backgroundColor: backgroundColor,
    },
    headerTitleStyle: {
      fontFamily: "nunito-black",
      color: "black",
    },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Share"
          iconName="close"
          onPress={() => {
            Alert.alert("Bỏ kỷ niệm", "Bạn có muốn bỏ viết kỷ niệm này?", [
              { text: "Không" },
              {
                text: "Bỏ",
                onPress: () => {
                  navData.navigation.goBack();
                },
                style: "cancel",
              },
            ]);
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <Text
        style={styles.actionText}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        Lưu
      </Text>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: backgroundColor,
    // paddingHorizontal: appPaddingHorizontal,
  },
  actionText: {
    color: primaryColor,
    marginRight: 15,
    fontFamily: "nunito",
  },
});

export default AddMemoryScreen;

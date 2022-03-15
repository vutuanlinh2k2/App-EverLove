import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { screenHeight, shadowDefault } from "../../constants/styles";

import { FontAwesome } from "@expo/vector-icons";

const SocialAuthButton = (props) => {
  const { name, title, color, backgroundColor, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <FontAwesome name={name} size={22} color={color} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    ...shadowDefault,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight / 15,
    width: "100%",
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
  },
  iconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "nunito-bold",
  },
});

export default SocialAuthButton;

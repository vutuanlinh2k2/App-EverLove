import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { primaryColor } from "../constants/colors";

const AddMemoryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>AddMemoryScreen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false,
    tabBarIcon: () => (
      <Ionicons name="add-circle-sharp" size={45} color={primaryColor} />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {},
});

export default AddMemoryScreen;

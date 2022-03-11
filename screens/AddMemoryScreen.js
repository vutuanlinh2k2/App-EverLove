import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const AddMemoryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>AddMemoryScreen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    tabBarIcon: ({ color, size }) => (
        <Ionicons name="add-circle-sharp" size={24} color="black" />
    ),
  };
};

const styles = StyleSheet.create({
  screen: {},
});

export default AddMemoryScreen;

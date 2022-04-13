import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const GoBackIcon = (props) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <FontAwesome
        name="chevron-left"
        size={27.5}
        color={"#bbb"}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default GoBackIcon;

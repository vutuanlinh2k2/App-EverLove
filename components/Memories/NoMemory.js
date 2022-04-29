import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { primaryColor, backgroundColor } from "../../constants/colors";

const NoMemory = (props) => {
  const { onAddMemory } = props;
  return (
    <View style={styles.noMemory}>
      <Text style={styles.text}>Chưa có kỉ niệm nào hiện tại</Text>
      <Text style={styles.actionText} onPress={onAddMemory}>
        Tạo ngay
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noMemory: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "nunito",
    marginBottom: 5,
  },
  actionText: {
    fontFamily: "nunito-bold",
    color: primaryColor,
    fontSize: 16,
  },
});

export default NoMemory;

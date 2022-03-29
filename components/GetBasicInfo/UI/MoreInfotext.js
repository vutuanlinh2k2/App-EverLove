import React from "react";
import { Text, StyleSheet } from "react-native";

const MoreInfoText = () => {
  return (
    <Text style={styles.text}>* Bạn có thể thay đổi các thông tin này sau.</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#bbb",
    fontSize: 11,
    marginTop: 10
  },
});

export default MoreInfoText;

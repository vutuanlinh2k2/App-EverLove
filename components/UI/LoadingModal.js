import React from "react";
import { View, StyleSheet, ActivityIndicator, Modal } from "react-native";

const LoadingModal = (props) => {
  const { isVisible } = props;

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <ActivityIndicator color="black" size="large" style={styles.loading} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .25)",
  },
});

export default LoadingModal;
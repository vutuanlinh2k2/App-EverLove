import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { greyColor } from "../../../constants/colors";

const ModalCancelItem = (props) => {
  const { onCancel } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.cancelAction}
      onPress={onCancel}
    >
      <Text style={styles.actionText}>Huỷ</Text>
    </TouchableOpacity>
  );
};

const itemModalDefaultStyles = {
  backgroundColor: greyColor,
  paddingVertical: 15,
  borderRadius: 15,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  cancelAction: {
    ...itemModalDefaultStyles,
    marginTop: 20,
  },
  actionText: {
    fontFamily: "nunito",
  },
  icon: {
    marginRight: 5,
  },
});

export default ModalCancelItem;

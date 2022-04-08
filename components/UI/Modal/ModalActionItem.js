import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { greyColor } from "../../../constants/colors";

const ModalActionItem = (props) => {
  const { IconComponent, iconName, action, title } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.mainAction}
      onPress={action}
    >
      {IconComponent && iconName && (
        <IconComponent
          style={styles.icon}
          name={iconName}
          size={24}
          color={primaryColor}
        />
      )}
      <Text style={styles.actionText}>{title}</Text>
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
  mainAction: {
    ...itemModalDefaultStyles,
    marginBottom: 10,
  },
  actionText: {
    fontFamily: "nunito",
  },
  icon: {
    marginRight: 5,
  },
});

export default ModalActionItem;

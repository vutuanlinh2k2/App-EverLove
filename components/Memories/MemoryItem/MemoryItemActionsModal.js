import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { primaryColor } from "../../../constants/colors";

const ActionItem = (props) => {
  const { IconComponent, iconName, action, title } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.mainActions}
      onPress={action}
    >
      <IconComponent
        style={styles.icon}
        name={iconName}
        size={24}
        color={primaryColor}
      />
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
};

const MemoryItemActionsModal = (props) => {
  const { isVisible, onShare, onDelete, onEdit, onCancel } = props;
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.actionsContainer}>
          <View style={styles.actions}>
            <ActionItem
              action={onShare}
              IconComponent={Feather}
              iconName="share"
              title="Chia sẻ"
            />
            <ActionItem
              action={onEdit}
              IconComponent={Feather}
              iconName="edit"
              title="Chỉnh sửa"
            />
            <ActionItem
              action={onDelete}
              IconComponent={FontAwesome5}
              iconName="trash-alt"
              title="Xoá"
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.cancelAction}
              onPress={onCancel}
            >
              <Text style={styles.actionText}>Huỷ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const itemModalDefaultStyles = {
  backgroundColor: "#eee",
  paddingVertical: 15,
  borderRadius: 15,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  actionsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .25)",
  },
  actions: {
    backgroundColor: "white",
    width: "100%",
    paddingBottom: 50,
    paddingTop: 30,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: 20,
  },
  mainActions: {
    ...itemModalDefaultStyles,
    marginBottom: 10,
  },
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

export default MemoryItemActionsModal;

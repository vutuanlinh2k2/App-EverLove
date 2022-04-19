import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

import ModalActionItem from "./ModalActionItem";
import ModalCancelItem from "./ModalCancelItem";

const ActionModal = (props) => {
  const { isVisible, onCancel, actionItems } = props;
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.actionsContainer}>
          <View style={styles.actions}>
            {actionItems.map((item) => {
              const { action, iconComponent, iconName, title } = item;
              return (
                <ModalActionItem
                  key={title}
                  action={action}
                  IconComponent={iconComponent}
                  iconName={iconName}
                  title={title}
                />
              );
            })}
            <ModalCancelItem onCancel={onCancel} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
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
});

export default ActionModal;

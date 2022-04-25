import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { getDate } from "../../../utils/memories";
import MemoryItemHeader from "./MemoryItemHeader";
import MemoryItemDescription from "./MemoryItemDescription";
import MemoryItemImages from "./MemoryItemImages";
import Divider from "../../UI/Divider";
import ActionModal from "../../UI/ActionModal/ActionModal";
import LoadingModal from "../../UI/LoadingModal";
import useDeleteMemory from "../../../hooks/Memories/useDeleteMemory";

const MemoryItem = (props) => {
  const [isOpenActions, setIsOpenActions] = useState(false);
  const { id, imageUrls, description, title, day, month, year, onEdit } = props;

  const { isLoading, deleteMemory } = useDeleteMemory();

  const date = getDate(day, month, year);

  const openActionsHandler = () => {
    setIsOpenActions(true);
  };

  const closeActionsHandler = () => {
    setIsOpenActions(false);
  };

  const openEditingHandler = () => {
    setIsOpenActions(false);
    onEdit({
      id,
      title,
      description,
      day,
      month,
      year,
      images: imageUrls,
    });
  };

  const deleteMemoryHandler = () => {
    Alert.alert("Xoá kỷ niệm", "Bạn có chắc chắn muốn xoá kỷ niệm này?", [
      { text: "Không" },
      {
        text: "Xoá",
        onPress: () => {
          deleteMemory(id, {
            imageUrls,
            day,
            month,
            year,
          });
        },
        style: "cancel",
      },
    ]);
  };

  const actionItems = [
    {
      action: openEditingHandler,
      iconComponent: FontAwesome5,
      iconName: "edit",
      title: "Chỉnh sửa",
    },
    {
      action: deleteMemoryHandler,
      iconComponent: FontAwesome5,
      iconName: "trash-alt",
      title: "Xoá",
    },
  ];

  return (
    <View style={styles.memoryItem}>
      <MemoryItemHeader
        date={date}
        title={title}
        onOpenActions={openActionsHandler}
      />
      <MemoryItemDescription description={description} />
      <MemoryItemImages imageUrls={imageUrls} />
      <Divider />
      <ActionModal
        isVisible={isOpenActions}
        onCancel={closeActionsHandler}
        actionItems={actionItems}
      />
      <LoadingModal isVisible={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  memoryItem: {
    marginTop: 2.5,
    overflow: "visible",
  },
});

export default MemoryItem;

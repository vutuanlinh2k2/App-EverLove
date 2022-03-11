import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import MemoryItemHeader from "./MemoryItemHeader";
import MemoryItemDescription from "./MemoryItemDescription";
import MemoryItemImages from "./MemoryItemImages";
import Divider from "../../UI/Divider";
import MemoryItemActionsModal from "./MemoryItemActionsModal";

const MemoryItem = (props) => {
  const [isOpenActions, setIsOpenActions] = useState(false);
  const { imageUrls, description, date, title } = props;

  const openActionsHandler = () => {
    setIsOpenActions(true);
  };

  const closeActionsHandler = () => {
    setIsOpenActions(false);
  };

  const shareMemoryHandler = () => {};
  const editMemoryHandler = () => {};
  const deleteMemoryHandler = () => {};

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
      <MemoryItemActionsModal
        isVisible={isOpenActions}
        onShare={shareMemoryHandler}
        onDelete={deleteMemoryHandler}
        onEdit={editMemoryHandler}
        onCancel={closeActionsHandler}
      />
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

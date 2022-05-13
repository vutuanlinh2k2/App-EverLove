import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import ImageLibraryModal from "../UI/ImageLibraryModal";
import ImagesInput from "./ImagesInput";
import ActionModal from "../UI/ActionModal/ActionModal";

const AddMemoryImages = (props) => {
  const { images, clearImages, updateImages } = props;
  const [modalActionsVisible, setModalActionsVisible] = useState(false);
  const [modalGetLibrary, setModalGetLibrary] = useState(false);

  const openModalActionsVisible = () => {
    setModalActionsVisible(true);
  };
  
  const cancelModalActionsVisible = () => {
    setModalActionsVisible(false);
  };

  const openModalGetLibrary = () => {
    setModalActionsVisible(false);
    setModalGetLibrary(true);
  };

  const cancelModalGetLibrary = () => {
    setModalGetLibrary(false);
  };

  const getImagesFromLibrary = (images) => {
    cancelModalGetLibrary(false);
    updateImages(images);
  };

  const verifyPermissions = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (result.status !== "granted") {
      Alert.alert(
        "Không có quyền truy cập",
        "Hãy cho ứng dụng quyền truy cập vào ảnh và camera.",
        [{ text: "Đã hiểu" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!image.cancelled) {
      updateImages([image.uri]);
      cancelModalActionsVisible();
    }
  };

  const actionItems = [
    {
      action: takeImageHandler,
      iconComponent: null,
      iconName: null,
      title: "Chụp ảnh",
    },
    {
      action: openModalGetLibrary,
      iconComponent: null,
      iconName: null,
      title: "Chọn ảnh từ thư viện",
    },
  ];

  return (
    <View style={styles.screen}>
      <ImagesInput
        openModal={openModalActionsVisible}
        images={images}
        onClear={clearImages}
        onEdit={openModalActionsVisible}
      />
      <ActionModal
        isVisible={modalActionsVisible}
        onCancel={cancelModalActionsVisible}
        actionItems={actionItems}
      />
      <ImageLibraryModal
        isVisible={modalGetLibrary}
        onCancel={cancelModalGetLibrary}
        onSelectImages={getImagesFromLibrary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    overflow: "visible",
  },
});

export default AddMemoryImages;

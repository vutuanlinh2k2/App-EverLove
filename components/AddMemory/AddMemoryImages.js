import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import ImageLibraryModal from "./ImageLibraryModal";
import ImagesInput from "./ImagesInput";
import Modal from "../UI/Modal/Modal";

const AddMemoryImages = (props) => {
  const [images, setImages] = useState([]);
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
    setImages(images);
  };

  const clearImages = () => {
    setImages([]);
  };

  const verifyPermissions = async () => {
    const result = await ImagePicker.getCameraPermissionsAsync();
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
      quality: 1,
    });

    setImages([image.uri]);
    cancelModalActionsVisible();
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
      <Modal
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

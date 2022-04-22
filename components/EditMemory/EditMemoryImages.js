import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

import ImageLibraryModal from "../UI/ImageLibraryModal";
import ActionModal from "../UI/ActionModal/ActionModal";
import { availableWidth, screenWidth } from "../../constants/styles";
import { primaryColor } from "../../constants/colors";

const imageSize = (availableWidth / 3) * 2;

const renderItem = ({ item: image, _ }) => {
  return <Image source={{ uri: image }} style={styles.image} />;
};

const EditMemoryImages = (props) => {
  const { images, updateImages } = props;
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
      {images.length === 1 ? (
        <Image source={{ uri: images[0] }} style={styles.image} />
      ) : (
        <Carousel
          layout={"default"}
          data={images}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={imageSize + 20}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          firstItem={0}
        />
      )}
      <View style={styles.actions}>
        <Feather
          style={styles.icon}
          name="edit-2"
          size={24}
          color={primaryColor}
          onPress={openModalActionsVisible}
        />
      </View>
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
  actions: {
    width: imageSize,
    flexDirection: "row",
    marginTop: 12.5,
    justifyContent: "center",
    alignItems: "center",
  },
  space: {
    width: 30,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 15,
  },
});

export default EditMemoryImages;

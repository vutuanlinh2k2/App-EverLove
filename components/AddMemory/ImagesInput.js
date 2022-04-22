import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

import {
  greyColor,
  primaryColor,
} from "../../constants/colors";
import { availableWidth, shadowDefault, screenWidth } from "../../constants/styles";

const imageSize = (availableWidth / 3) * 2;

const renderItem = ({ item: image, _ }) => {
  return <Image source={{ uri: image }} style={styles.image} />;
};

const ImagesInput = (props) => {
  const { images, openModal, onClear, onEdit } = props;
  return (
    <>
      {images.length === 0 && (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.imagePlaceholder}
          onPress={openModal}
        >
          <Ionicons name="add-sharp" size={50} color={primaryColor} />
        </TouchableOpacity>
      )}
      {images.length === 1 && (
        <Image source={{ uri: images[0] }} style={styles.image} />
      )}
      {images.length > 1 && (
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
      {images.length > 0 && (
        <View style={styles.actions}>
          <Feather
            style={styles.icon}
            name="trash-2"
            size={24}
            color={primaryColor}
            onPress={onClear}
          />
          <View style={styles.space} />
          <Feather
            style={styles.icon}
            name="edit-2"
            size={24}
            color={primaryColor}
            onPress={onEdit}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imagePlaceholder: {
    ...shadowDefault,
    backgroundColor: greyColor,
    width: imageSize,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
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

export default ImagesInput;

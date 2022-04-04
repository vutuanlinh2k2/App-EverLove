import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { appPaddingHorizontal, screenWidth } from "../../constants/styles";
import { primaryColor, accentColor } from "../../constants/colors";
import ContinueButton from "./UI/ContinueButton";
import GoBackButton from "./UI/GoBackButton";
import ScreenHeader from "./UI/ScreenHeader";
import MoreInfoText from "./UI/MoreInfotext";

const imageSize = screenWidth / 3;

const ImageItem = (props) => {
  const { title, onSelect } = props;
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      onSelect(result.uri);
      setImage(result.uri);
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  return (
    <View style={styles.itemContainer}>
      {/* <Image source={{ uri: image }} style={styles.image} /> */}
      <View style={styles.imageContainer}>
        {!image ? (
          <Pressable style={styles.image} onPress={pickImage}>
            <Ionicons name="add-sharp" size={50} color={primaryColor} />
          </Pressable>
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
        {image && (
          <View style={styles.iconContainer}>
            <Feather
              style={styles.icon}
              name="edit-2"
              size={24}
              color={primaryColor}
              onPress={pickImage}
            />
            <Feather
              style={styles.icon}
              name="trash-2"
              size={24}
              color={primaryColor}
              onPress={clearImage}
            />
          </View>
        )}
        <Text style={styles.imageTitle}>{title}</Text>
      </View>
    </View>
  );
};

const GetImages = (props) => {
  const [userImage, setUserImage] = useState(null);
  const [partnerImage, setPartnerImage] = useState(null);
  const { goBackItem, onSubmit } = props;

  const onSubmitImages = () => {
    onSubmit({
      image: userImage,
      partnerImage,
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <View>
          <ScreenHeader title="Chọn ảnh" />
          <View style={styles.images}>
            <ImageItem title="Ảnh của bạn" onSelect={setUserImage} />
            <ImageItem title="Ảnh của người ấy" onSelect={setPartnerImage} />
          </View>
          <MoreInfoText text="* Bạn có thể bỏ qua phần này hoặc chỉnh lúc sau." />
        </View>
      </View>
      <View>
        <GoBackButton onPress={goBackItem} />
        <ContinueButton onPress={onSubmitImages} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: appPaddingHorizontal,
    justifyContent: "space-between",
    flex: 1,
  },
  body: {
    justifyContent: "center",
    flex: 1,
  },
  images: {
    flexDirection: "row",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    borderWidth: 4,
    borderColor: accentColor,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  imageTitle: {
    fontFamily: "nunito-bold",
    textAlign: "center",
    fontSize: 13,
  },
  iconContainer: {
    marginBottom: 10,
    flexDirection: "row",
    width: "100%",
  },
  icon: {
    marginHorizontal: 7.5,
  },
});

export default GetImages;

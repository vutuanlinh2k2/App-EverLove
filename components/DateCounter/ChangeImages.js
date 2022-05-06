import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { screenWidth } from "../../constants/styles";
import { accentColor } from "../../constants/colors";

const imageSize = screenWidth / 3;

const ChangeImage = (props) => {
  const { image, updateImage } = props;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      updateImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.imageContainer}
        onPress={pickImage}
      >
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    overflow: "hidden",
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    borderColor: accentColor,
    borderWidth: 5,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
});

export default ChangeImage;

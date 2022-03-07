import React from "react";
import { Image } from "react-native";

import { availableWidth } from "../../constants/styles";

const mediumWidth = availableWidth / 2 - 5;
const smallWidth = (availableWidth - 42.5) / 3;

const MemoryImage = (props) => {
  const { size, imageUrl } = props;

  let imageWidth;
  if (size === "big") {
    imageWidth = availableWidth;
  } else if (size === "medium") {
    imageWidth = mediumWidth;
  } else if (size === "small") {
    imageWidth = smallWidth;
  }

  return (
    <Image
      style={{
        borderRadius: 15,
        width: imageWidth,
        aspectRatio: 1,
      }}
      source={{ uri: imageUrl }}
    />
  );
};

export default MemoryImage;

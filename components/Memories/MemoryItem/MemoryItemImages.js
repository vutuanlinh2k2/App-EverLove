import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import Carousel from "react-native-snap-carousel";

import { availableWidth, appCarouselItemWidth } from "../../../constants/styles";

const MemoryItemImages = (props) => {
  const { imageUrls } = props;
  if (imageUrls.length === 1) {
    return <Image style={styles.image} source={{ uri: imageUrls[0] }} />;
  }
  const renderItem = ({ item: imageUrl, index }) => {
    return (
      <View style={styles.imagesContainer}>
        <ImageBackground style={styles.image} source={{ uri: imageUrl }}>
          <Text style={styles.imageIndex}>{`${index + 1}/${
            imageUrls.length
          }`}</Text>
        </ImageBackground>
      </View>
    );
  };
  return (
    <>
      <Carousel
        layout={"default"}
        data={imageUrls}
        renderItem={renderItem}
        sliderWidth={availableWidth}
        itemWidth={appCarouselItemWidth}
        activeSlideAlignment="start"
        containerCustomStyle={{ overflow: "visible" }}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        removeClippedSubviews={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    width: availableWidth,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: availableWidth,
    aspectRatio: 1,
    borderRadius: 15,
  },
  imageIndex: {
    color: "white",
    fontFamily: "nunito-bold",
    marginTop: 10,
    marginLeft: 10,
  },
});

export default MemoryItemImages;

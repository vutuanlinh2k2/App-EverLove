import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { primaryColor } from "../../constants/colors";
import { availableWidth } from "../../constants/styles";
import Divider from "../UI/Divider";

const renderCarouselItem = ({ item, _ }) => {
  return <Image style={styles.image} source={{ uri: item }} />;
};

const MemoryItem = (props) => {
  const { imageUrls, description } = props;
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const imagesSection =
    imageUrls.length > 1 ? (
      <>
        <Carousel
          data={imageUrls}
          renderItem={renderCarouselItem}
          sliderWidth={availableWidth}
          itemWidth={availableWidth + 15}
          onSnapToItem={(index) => {
            setCurrentCarouselIndex(index);
          }}
          useScrollView={true}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Pagination
            dotsLength={imageUrls.length}
            activeDotIndex={currentCarouselIndex}
            containerStyle={styles.pagination}
            inactiveDotOpacity={0.6}
            dotStyle={styles.dot}
          />
        </View>
      </>
    ) : (
      <Image style={styles.image} source={{ uri: imageUrls[0] }} />
    );

  return (
    <View style={styles.memoryItem}>
      {imagesSection}
      <View>
        <Text style={styles.memoryDescription}>{description}</Text>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  memoryItem: {
    marginVertical: 7.5,
  },
  image: {
    width: availableWidth,
    aspectRatio: 1,
    borderRadius: 25,
  },
  pagination: {
    paddingVertical: 10,
  },
  dot: {
    backgroundColor: primaryColor,
  },
  memoryDescription: {
    fontFamily: "nunito",
    fontSize: 13,
    marginTop: 10,
    color: "#445d6e",
  },
});

export default MemoryItem;

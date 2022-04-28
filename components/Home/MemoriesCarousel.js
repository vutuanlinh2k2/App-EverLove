import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

import { availableWidth, appCarouselItemWidth } from "../../constants/styles";
import { accentColor } from "../../constants/colors";
import MemoriesCarouselItem from "./MemoriesCarouselItem";
import LoadingIndicator from "../UI/LoadingIndicator";
import useMemoriesCarousel from "../../hooks/useMemoriesCarousel";

const itemWidth = availableWidth / 2 - 5;

const renderItem = ({ item }) => {
  const { memoryLeft, memoryRight } = item;
  return (
    <View style={styles.imagesContainer}>
      <MemoriesCarouselItem
        day={memoryLeft.data.day}
        month={memoryLeft.data.month}
        year={memoryLeft.data.year}
        images={memoryLeft.data.images}
        onPress={() => {}}
      />
      {memoryRight && <MemoriesCarouselItem
        day={memoryRight.data.day}
        month={memoryRight.data.month}
        year={memoryRight.data.year}
        images={memoryRight.data.images}
        onPress={() => {}}
      />}
    </View>
  );
};

const MemoriesCarousel = (props) => {
  const { memoriesData, isLoading } = useMemoriesCarousel();


  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <LoadingIndicator />
      </View>
    );
  }

  if (memoriesData.length === 0) {
    
  }

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout={"default"}
        data={memoriesData}
        renderItem={renderItem}
        sliderWidth={availableWidth}
        itemWidth={appCarouselItemWidth}
        activeSlideAlignment="start"
        containerCustomStyle={{ overflow: "visible" }}
        useScrollView={true}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    width: availableWidth,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: itemWidth,
    aspectRatio: 1,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  touchable: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: accentColor,
  },
  date: {
    fontFamily: "nunito-bold",
    color: "white",
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 15,
  },
  loadingContainer: {
    height: itemWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MemoriesCarousel;

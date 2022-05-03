import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

import { availableWidth, appCarouselItemWidth } from "../../constants/styles";
import { commonTextColor } from "../../constants/colors";
import MemoriesCarouselItem from "./MemoriesCarouselItem";
import LoadingIndicator from "../UI/LoadingIndicator";
import useMemoriesCarousel from "../../hooks/useMemoriesCarousel";

const itemWidth = availableWidth / 2 - 5;

const MemoriesCarousel = (props) => {
  const { onNavigateMemory } = props;
  const { memoriesData, isLoading } = useMemoriesCarousel();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <LoadingIndicator />
      </View>
    );
  }

  if (memoriesData.length === 0) {
    return <Text style={styles.noMemory}>Bạn chưa tạo kỉ niệm nào.</Text>;
  }

  const renderItem = ({ item }) => {
    const { memoryLeft, memoryRight } = item;
    return (
      <View style={styles.imagesContainer}>
        <MemoriesCarouselItem
          day={memoryLeft.data.day}
          month={memoryLeft.data.month}
          year={memoryLeft.data.year}
          images={memoryLeft.data.images}
          onNavigateMemory={onNavigateMemory}
        />
        {memoryRight && (
          <MemoriesCarouselItem
            day={memoryRight.data.day}
            month={memoryRight.data.month}
            year={memoryRight.data.year}
            images={memoryRight.data.images}
            onNavigateMemory={onNavigateMemory}
          />
        )}
      </View>
    );
  };

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
  loadingContainer: {
    height: itemWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  noMemory: {
    fontFamily: "nunito",
    color: commonTextColor,
  },
});

export default MemoriesCarousel;

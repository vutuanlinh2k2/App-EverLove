import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

import { screenWidth, appPaddingHorizontal } from "../../constants/styles";
import DateCounter1 from "./DateCounter1";
import DateCounter2 from "./DateCounter2";

const carouselItems = [
  { content: <DateCounter1 /> },
  { content: <DateCounter2 /> },
];

const renderItem = ({ item, _ }) => {
  return item.content;
};

const DateCounterCarousel = (props) => {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout={"default"}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={screenWidth - 2 * appPaddingHorizontal}
        itemWidth={screenWidth - 2 * appPaddingHorizontal - 17.5}
        activeSlideAlignment="center"
        containerCustomStyle={{ overflow: "visible" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DateCounterCarousel;

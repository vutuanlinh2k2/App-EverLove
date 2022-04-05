import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { screenWidth, appPaddingHorizontal } from "../../constants/styles";
import { primaryColor } from "../../constants/colors";
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
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  return (
    <View style={styles.dateCounter}>
      <Carousel
        layout={"default"}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={screenWidth - 2 * appPaddingHorizontal}
        itemWidth={screenWidth - 2 * appPaddingHorizontal}
        useScrollView={true}
        firstItem={0}
        onSnapToItem={(index) => {
          setCurrentCarouselIndex(index);
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={currentCarouselIndex}
          containerStyle={styles.pagination}
          inactiveDotScale={1}
          inactiveDotOpacity={0.3}
          dotStyle={styles.dot}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateCounter: {},
  dot: {
    backgroundColor: primaryColor,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default DateCounterCarousel;

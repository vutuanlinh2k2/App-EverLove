import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { screenWidth, appPaddingHorizontal } from "../../../constants/styles";
import { primaryColor } from "../../../constants/colors";
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
  const { initialIndex } = props;
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(initialIndex);
  return (
    <View style={styles.dateCounter}>
      <Carousel
        layout={"default"}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={screenWidth - 2 * appPaddingHorizontal}
        itemWidth={screenWidth - 2 * appPaddingHorizontal}
        useScrollView={true}
        firstItem={initialIndex}
        onSnapToItem={(index) => {
          setCurrentCarouselIndex(index);
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={currentCarouselIndex}
          containerStyle={styles.pagination}
          inactiveDotOpacity={0.6}
          dotStyle={styles.dot}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateCounter: {},
  pagination: {
    backgroundColor: primaryColor,
    width: 50,
    paddingVertical: 7,
    marginTop: 7.5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

export default DateCounterCarousel;

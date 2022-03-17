import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

import { availableWidth, appCarouselItemWidth } from "../../constants/styles";
import DateCounter1 from "./HomeDateCounter1";
import DateCounter2 from "./HomeDateCounter2";

const renderItem = ({ item, _ }) => {
  return item.content;
};

const HomeCarousel = (props) => {
  const { onPressItem } = props;
  const carouselItems = useMemo(
    () => [
      { content: <DateCounter1 onPress={onPressItem} /> },
      { content: <DateCounter2 onPress={onPressItem} /> },
    ],
    [DateCounter1, DateCounter2, onPressItem]
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout={"default"}
        data={carouselItems}
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
  carouselContainer: {},
});

export default HomeCarousel;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-snap-carousel";

import { availableWidth, appCarouselItemWidth } from "../../../constants/styles";
import { accentColor } from "../../../constants/colors";

const itemWidth = availableWidth / 2 - 5;

const carouselItems = [
  {
    imageUrl1:
      "https://images.unsplash.com/photo-1631208446303-40facec6e391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127&q=80",
    date1: "1 năm trước",
    imageUrl2:
      "https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    date2: "5/6",
  },
  {
    imageUrl1:
      "https://images.unsplash.com/photo-1608153488161-803b502750fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    date1: "Valentines",
    imageUrl2:
      "https://images.unsplash.com/photo-1600879227354-f2809c06f145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1137&q=80",
    date2: "10/12",
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.imagesContainer}>
      <ImageBackground source={{ uri: item.imageUrl1 }} style={styles.image}>
        <Text style={styles.date}>{item.date1}</Text>
      </ImageBackground>
      <ImageBackground source={{ uri: item.imageUrl2 }} style={styles.image}>
        <Text style={styles.date}>{item.date2}</Text>
      </ImageBackground>
    </View>
  );
};

const MemoriesCarousel = (props) => {
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
});

export default MemoriesCarousel;

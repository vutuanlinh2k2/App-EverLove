import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { primaryColor } from "../../constants/colors";
import { availableWidth, appCarouselItemWidth } from "../../constants/styles";
import Divider from "../UI/Divider";

const iconSize = 24;

const MemoryItem = (props) => {
  const { imageUrls, description, date, title } = props;
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
  const imagesSection =
    imageUrls.length > 1 ? (
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
        />
      </>
    ) : (
      <Image style={styles.image} source={{ uri: imageUrls[0] }} />
    );

  return (
    <View style={styles.memoryItem}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.titleUnderline} />
      <View style={styles.infoSection}>
        <View style={styles.date}>
          <FontAwesome5
            name="calendar-day"
            size={iconSize}
            color={primaryColor}
          />
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.actions}>
        <Feather name="more-horizontal" size={iconSize} color={primaryColor} />
        </View>
      </View>
      <Text style={styles.memoryDescription}>{description}</Text>
      {imagesSection}
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  memoryItem: {
    marginTop: 2.5,
  },
  title: {
    fontFamily: "nunito-black",
    fontSize: 20,
    marginBottom: 2.5,
  },
  titleUnderline: {
    height: 5,
    width: "25%",
    backgroundColor: primaryColor,
    borderRadius: 10,
    marginBottom: 5,
  },
  infoSection: {
    marginVertical: 7.5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    fontFamily: "nunito-bold",
    color: "#445d6e",
    marginLeft: 7.5,
  },
  actions: {
    flexDirection: "row",
  },
  actionIcon: {
    marginLeft: 10,
  },
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
  memoryDescription: {
    fontFamily: "nunito",
    fontSize: 13,
    marginBottom: 10,
    color: "#445d6e",
  },
});

export default MemoryItem;

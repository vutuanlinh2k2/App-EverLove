import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { availableWidth } from "../../constants/styles";
import { getRandomItem } from "../../utils/general";
import { getDate } from "../../utils/memories";

const itemWidth = availableWidth / 2 - 5;

const MemoriesCarouselItem = (props) => {
  const { day, month, year, images, onNavigateMemory } = props;

  const date = getDate(day, month, year);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        onNavigateMemory(day, month, year);
      }}
      style={styles.container}
    >
      <ImageBackground
        source={{ uri: getRandomItem(images) }}
        style={styles.image}
      >
        <Text style={styles.date}>{`${date}`}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: itemWidth,
    aspectRatio: 1,
    justifyContent: "flex-end",
  },
  date: {
    fontFamily: "nunito-bold",
    color: "white",
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 15,
  },
});

export default MemoriesCarouselItem;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const MemoryNavigateItem = (props) => {
  const { imageUrl, numOfPosts, onPress, numOfImages, title, isDayItem } =
    props;
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <ImageBackground style={styles.image} source={{ uri: imageUrl }}>
        <View style={styles.textContainer}>
          <Text style={styles.yearText}>{title}</Text>
          <View style={styles.contentRight}>
            {isDayItem && numOfPosts === 1 ? null : (
              <>
                <Text style={styles.smallText}>{numOfPosts}</Text>
                <MaterialIcons name="event" color="white" size={23} />
              </>
            )}
            <Text style={styles.smallText}>{numOfImages}</Text>
            <Ionicons name="image" color="white" size={23} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 25,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    justifyContent: "flex-end",
  },
  textContainer: {
    marginHorizontal: 10,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  yearText: {
    color: "white",
    fontFamily: "nunito-black",
    fontSize: 25,
  },
  contentRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  smallText: {
    color: "white",
    fontFamily: "nunito-bold",
    marginLeft: 10,
  },
});

export default MemoryNavigateItem;

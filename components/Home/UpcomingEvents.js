import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

import { accentColor } from "../../constants/colors";
import { shadowDefault } from "../../constants/styles";

const imageWidth = 65;

const EventItem = (props) => {
  const { holidayTitle, daysLeft, anniversaryDays } = props;
  const dateTitle = holidayTitle
    ? holidayTitle
    : `${parseInt(anniversaryDays)} ngày bên nhau`;
  const roundedContent = holidayTitle ? (
    <Image
      style={styles.roundedImage}
      source={{
        uri: "https://images.unsplash.com/photo-1545685556-33cd7e3415df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      }}
    />
  ) : (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1499470117579-6e87c00de75e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
      }}
      style={styles.roundedImageBackground}
    >
      <Text style={styles.anniversaryDays}>{anniversaryDays}</Text>
    </ImageBackground>
  );
  return (
    <View style={styles.event}>
      {roundedContent}
      <Text style={styles.dateTitle}>{dateTitle}</Text>
      <Text style={styles.daysLeft}>{`${daysLeft} ngày`}</Text>
    </View>
  );
};

const UpcomingEvents = (props) => {
  return (
    <View style={styles.upcomingEvents}>
      <EventItem holidayTitle="Giáng Sinh" daysLeft={10} />
      <EventItem daysLeft={20} anniversaryDays={100} />
      <EventItem daysLeft={120} anniversaryDays={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  upcomingEvents: {},
  event: {
    ...shadowDefault,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7.5,
    backgroundColor: accentColor,
    padding: 10,
    borderRadius: 15,
  },
  roundedImage: {
    width: imageWidth,
    aspectRatio: 1,
    borderRadius: imageWidth / 2,
  },
  roundedImageBackground: {
    width: imageWidth,
    aspectRatio: 1,
    borderRadius: imageWidth / 2,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  anniversaryDays: {
    color: "white",
    fontFamily: "nunito-bold",
  },
  dateTitle: {
    flex: 1,
    fontFamily: "nunito-bold",
    marginHorizontal: 12.5,
  },
  daysLeft: {
    fontFamily: "nunito-black",
    fontSize: 13,
  },
});

export default UpcomingEvents;

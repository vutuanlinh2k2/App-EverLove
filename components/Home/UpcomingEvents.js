import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { commonTextColor } from "../../constants/colors";
import { screenWidth } from "../../constants/styles";
import useUpcomingEvents from "../../hooks/useUpcomingEvents";

const imageWidth = screenWidth / 7;
const imageMatching = {
  birthday: require("../../assets/birthday.jpeg"),
  anniversary: require("../../assets/balloons.jpeg"),
  christmas: require("../../assets/christmas.jpeg"),
  genderDay: require("../../assets/genderDay.jpeg"),
  newYear: require("../../assets/newYear.jpeg"),
  valentines: require("../../assets/valentines.jpeg"),
};

const EventItem = (props) => {
  const { daysLeft, dateTitle, dateType } = props;
  const image = imageMatching[dateType];
  return (
    <View style={styles.event}>
      <Image style={styles.roundedImage} source={image} />
      <Text style={styles.dateTitle}>{dateTitle}</Text>
      <Text style={styles.daysLeft}>{daysLeft}</Text>
    </View>
  );
};

const UpcomingEvents = (props) => {
  const events = useUpcomingEvents();
  return (
    <View style={styles.upcomingEvents}>
      {events.length === 0 && (
        <Text style={styles.noEventText}>
          Không có kỉ niệm nào trong 30 ngày tới.
        </Text>
      )}
      {events.map((event) => {
        const { daysLeft, dateType, dateTitle } = event;
        return (
          <EventItem
            key={dateTitle}
            daysLeft={daysLeft}
            dateType={dateType}
            dateTitle={dateTitle}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  upcomingEvents: {},
  event: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingVertical: 10,
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
    overflow: "hidden",
  },
  anniversaryDays: {
    fontFamily: "nunito-black",
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
  noEventText: {
    fontFamily: "nunito",
    marginBottom: 15,
    fontSize: 12,
    color: commonTextColor,
  },
});

export default UpcomingEvents;

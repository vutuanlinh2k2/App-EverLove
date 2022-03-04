import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import { primaryColor } from "../../constants/colors";

const HeaderTitle = (props) => {
  const { title, logo } = props;
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleText}>
        <Text style={styles.title}>{title}</Text>
        <View>
          {logo && (
            <Image
              style={styles.appLogo}
              source={require("../../assets/app-logo.png")}
            />
          )}
        </View>
      </View>
      <View style={styles.titleBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontFamily: "nunito-black",
    fontSize: 27.5,
  },
  titleBottom: {
    height: 5,
    backgroundColor: primaryColor,
    width: "20%",
    borderRadius: 10,
  },
  appLogo: {
    height: 40,
    aspectRatio: 1
  },
});

export default HeaderTitle;

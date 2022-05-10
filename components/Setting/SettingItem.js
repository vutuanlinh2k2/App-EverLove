import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

import {
  primaryColor,
  greyColor,
  commonTextColor,
} from "../../constants/colors";

const SettingItem = (props) => {
  const { IconComponent, iconName, title, rightContent, onPress } = props;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <IconComponent name={iconName} size={27.5} color={primaryColor} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        {rightContent ?? (
          <Entypo name="chevron-right" size={23} color={commonTextColor} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 5,
    paddingVertical: 10,
    // paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderColor: greyColor,
    marginBottom: 5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "nunito-bold",
    marginLeft: 10,
    fontSize: 15,
  },
});

export default SettingItem;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { accentColor } from "../../constants/colors";

const PersonInfo = (props) => {
  const { name, imageUrl } = props;
  return (
    <View style={styles.personInfo}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.personName}>{name}</Text>
    </View>
  );
};

const CoupleInfo = (props) => {
  return (
    <View style={styles.coupleInfo}>
      <PersonInfo
        name="Hoàng"
        imageUrl="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2924&q=80"
      />
      <PersonInfo
        name="Đậu"
        imageUrl="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  coupleInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    borderWidth: 5,
    borderColor: accentColor,
  },
  personName: {
    textAlign: "center",
    fontFamily: "nunito-bold",
    marginTop: 7.5,
    fontSize: 17.5,
  },
});

export default CoupleInfo;

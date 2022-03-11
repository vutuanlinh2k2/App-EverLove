import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { primaryColor } from "../../../constants/colors";

const limitedCharacter = 100;

const MemoryItemDescription = (props) => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const { description } = props;
  if (description.length < limitedCharacter) {
    return (
      <View style={styles.screen}>
        <Text style={styles.memoryDescription}>{description}</Text>
      </View>
    );
  }
  const shortenDescription = `${description.substring(0, limitedCharacter)}`;

  return (
    <View style={styles.screen}>
      <Text style={styles.memoryDescription}>
        {!isSeeMore ? shortenDescription : description}
        {!isSeeMore && <Text style={{color: primaryColor}}>...</Text>}
      </Text>
      {!isSeeMore ? (
        <Text
          style={styles.action}
          onPress={() => {
            setIsSeeMore(true);
          }}
        >
          Xem thêm
        </Text>
      ) : (
        <Text
          style={styles.action}
          onPress={() => {
            setIsSeeMore(false);
          }}
        >
          Xem bớt
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  memoryDescription: {
    fontFamily: "nunito",
    fontSize: 13,
    marginBottom: 2.5,
    color: "#445d6e",
  },
  action: {
    fontFamily: "nunito",
    fontSize: 13,
    marginBottom: 10,
    color: "#445d6e",
    color: primaryColor,
  },
});

export default MemoryItemDescription;

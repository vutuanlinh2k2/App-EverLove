import React from "react";
import { Text, StyleSheet } from "react-native";

const MemoryDescription = (props) => {
  const { description, isShorten } = props;
    if (isShorten && description.length > 60) {
        const shortenDescription = `${description.substring(0, 100)}...`
        return <Text style={styles.description}>{shortenDescription}</Text>
    }
  return <Text style={styles.description}>{description}</Text>;
};

const styles = StyleSheet.create({
  description: {
    fontFamily: "nunito",
    // color: "#445d6e",
    marginBottom: 15,
    textAlign: 'justify',
    fontSize: 12.5,
  },
});

export default MemoryDescription;

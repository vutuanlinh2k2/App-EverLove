import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ContinueButton from "./UI/ContinueButton";
import GoBackButton from "./GoBackButton";

const GetLoveDate = (props) => {
    const { goBackItem, onGoToNextItem } = props;
    return (
        <View style={styles.screen}>
            <Text>GetLoveDate</Text>
            <ContinueButton onPress={onGoToNextItem} />
      <GoBackButton onPress={goBackItem} />
        </View>
    )
};

const styles = StyleSheet.create({
  screen: {
    
  },
});

export default GetLoveDate;
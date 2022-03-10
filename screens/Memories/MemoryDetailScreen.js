import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import BodyWrapper from "../../components/UI/BodyWrapper";

const MemoryDetailScreen = (props) => {

  return (
    <BodyWrapper>
      <Text>MemoryDetailScreen</Text>
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    title: "",
    // headerLeft: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Back"
    //       iconName="arrow-back-outline"
    //       onPress={() => {
    //         navData.navigation.goBack();
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
  };
};

// const styles = StyleSheet.create({
//   screen: {},
// });

export default MemoryDetailScreen;

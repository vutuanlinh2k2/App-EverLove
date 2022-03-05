import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import BodyWrapper from "../../components/UI/BodyWrapper";
import HeaderTitle from "../../components/UI/HeaderTitle";
import HeaderButton from "../../components/UI/HeaderButton";
import MemoryDescription from "../../components/Memories/MemoryDescription";
import MemoryImage from "../../components/Memories/MemoryImage";

const memoryImages = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1475204257634-df83964505c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  },
  // {
  //   id: 3,
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  // },
  // { id: 4, imageUrl: "https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"},
  // { id: 5, imageUrl: "https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"},
  // { id: 6, imageUrl: "https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"},
  // { id: 7, imageUrl: "https://images.unsplash.com/photo-1522973717924-b10fe4e185cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"},
];
const description =
  "Gubergren voluptua duo lorem eos duo ea diam et amet. Voluptua vero accusam duo aliquyam sed consetetur, erat invidunt stet.";

const MemoryDetailScreen = (props) => {
  const { route } = props;
  const { title } = route.params;

  const renderItem = ({ item }) => {
    return <MemoryImage size="medium" imageUrl={item.imageUrl} />;
  };

  return (
    <BodyWrapper>
      <HeaderTitle title={title} />
      <MemoryDescription description={description} />
      {memoryImages.length === 1 ? (
        <MemoryImage size="big" imageUrl={memoryImages[0].imageUrl} />
      ) : (
        <FlatList
          data={memoryImages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        />
      )}
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    title: "",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Back"
          iconName="arrow-back-outline"
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {},
});

export default MemoryDetailScreen;

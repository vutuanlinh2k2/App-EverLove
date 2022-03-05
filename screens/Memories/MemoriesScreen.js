import React from "react";
import { FlatList } from "react-native";

import { memoryScreenTitle } from "../../constants/screenTitles";
import BodyWrapper from "../../components/UI/BodyWrapper";
import HeaderTitle from "../../components/UI/HeaderTitle";
import MemoryItem from "../../components/Memories/MemoryItem";

const memoriesInfo = [
  {
    id: 1,
    date: "05/03",
    description:
      "Gubergren voluptua duo lorem eos duo ea diam et amet. Voluptua vero accusam duo aliquyam sed consetetur, erat invidunt stet.",
  },
  {
    id: 2,
    date: "14/02",
    description:
      "Gubergren voluptua duo lorem eos duo ea diam et amet. Voluptua vero accusam duo aliquyam sed consetetur, erat invidunt stet.",
  },
  {
    id: 3,
    date: "21/01",
    description:
      "Gubergren voluptua duo lorem eos duo ea diam et amet. Voluptua vero accusam duo aliquyam sed consetetur, erat invidunt stet.",
  },
];

const MemoriesScreen = (props) => {
  const { navigation } = props;
  const onGoDetailHandler = (title) => {
    navigation.navigate("MemoryDetail", {
      title,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <MemoryItem
        key={item.id}
        title={item.title}
        date={item.date}
        onGoDetail={onGoDetailHandler}
        description={item.description}
      />
    );
  };

  return (
    <BodyWrapper>
      <HeaderTitle title={memoryScreenTitle} />
      <FlatList
        data={memoriesInfo}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </BodyWrapper>
  );
};

export const screenOptions = (navData) => {
  return {
    title: "",
  };
};

export default MemoriesScreen;

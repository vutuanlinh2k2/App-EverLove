import React, { useState, useRef, useMemo } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { backgroundColor, primaryColor } from "../constants/colors";
import { screenWidth } from "../constants/styles";
import GetImages from "../components/GetBasicInfo/GetImages";
import GetLoveDate from "../components/GetBasicInfo/GetLoveDate";
import GetPartnerInfo from "../components/GetBasicInfo/GetPartnerInfo";
import GetUserInfo from "../components/GetBasicInfo/GetUserInfo";
import PlanChoices from "../components/GetBasicInfo/PlanChoices";

const renderItem = ({ item, _ }) => {
  return item.content;
};

const initialSlide = 0;

const GetBasicInfoScreen = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(initialSlide);
  const carouselRef = useRef();

  const goToNextItem = () => {
    carouselRef.current.snapToNext();
    // setCarouselIndex(prevValue => prevValue + 1);
  };

  const goBackItem = () => {
    carouselRef.current.snapToPrev();
    // setCarouselIndex(prevValue => prevValue + 1);
  };

  const carouselItems = useMemo(
    () => [
      { content: <GetUserInfo onGoToNextItem={goToNextItem} /> },
      {
        content: (
          <GetPartnerInfo
            onGoToNextItem={goToNextItem}
            goBackItem={goBackItem}
          />
        ),
      },
      {
        content: (
          <GetImages onGoToNextItem={goToNextItem} goBackItem={goBackItem} />
        ),
      },
      {
        content: (
          <GetLoveDate onGoToNextItem={goToNextItem} goBackItem={goBackItem} />
        ),
      },
      { content: <PlanChoices goBackItem={goBackItem} /> },
    ],
    [GetUserInfo, GetPartnerInfo, GetImages, GetLoveDate, PlanChoices]
  );

  return (
    <SafeAreaView style={styles.screen}>
      <Carousel
        ref={carouselRef}
        layout={"default"}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        useScrollView={true}
        firstItem={initialSlide}
        containerCustomStyle={styles.itemContainer}
        inactiveSlideScale={1}
        scrollEnabled={false}
        onSnapToItem={(index) => {
          setCarouselIndex(index);
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={carouselIndex}
          containerStyle={styles.pagination}
          dotStyle={styles.dot}
          inactiveDotScale={1}
          inactiveDotOpacity={0.3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: backgroundColor,
    overflow: "visible",
  },
  itemContainer: {
    flex: 1,
    overflow: "visible",
  },
  dot: {
    backgroundColor: primaryColor,
    width: 8,
    height: 8,
    borderRadius: 4
  }
});

export default GetBasicInfoScreen;

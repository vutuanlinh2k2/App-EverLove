import React, { useState, useRef, useMemo } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useDispatch } from "react-redux";

import { backgroundColor, primaryColor } from "../constants/colors";
import { screenWidth } from "../constants/styles";
import { createUserInfo } from "../store/actions/userInfo";
import GetImages from "../components/GetBasicInfo/GetImages";
import GetLoveDate from "../components/GetBasicInfo/GetLoveDate";
import GetPartnerInfo from "../components/GetBasicInfo/GetPartnerInfo";
import GetUserInfo from "../components/GetBasicInfo/GetUserInfo";
import PlanChoices from "../components/GetBasicInfo/PlanChoices";
import StartApp from "../components/GetBasicInfo/StartApp";

const renderItem = ({ item: component, _ }) => {
  return component;
};

const initialSlide = 0;

const GetBasicInfoScreen = (props) => {
  const [carouselIndex, setCarouselIndex] = useState(initialSlide);

  const carouselRef = useRef();
  const userInfoRef = useRef();
  const partnerInfoRef = useRef();
  const imagesRef = useRef();
  const loveDateRef = useRef();

  const dispatch = useDispatch();

  const goToNextItem = () => {
    carouselRef.current.snapToNext();
  };

  const goBackItem = () => {
    carouselRef.current.snapToPrev();
  };

  const getUserInfoHandler = (info) => {
    userInfoRef.current = info;
    goToNextItem();
  };

  const getPartnerInfoHandler = (info) => {
    partnerInfoRef.current = info;
    goToNextItem();
  };

  const getImagesHandler = (images) => {
    imagesRef.current = images;
    goToNextItem();
  };

  const getLoveDate = (date) => {
    loveDateRef.current = date;
    goToNextItem();
  };

  const startAppHandler = () => {
    const userInfo = {
      ...userInfoRef.current,
      ...partnerInfoRef.current,
      ...imagesRef.current,
      ...loveDateRef.current,
      noAds: false,
    };
    dispatch(createUserInfo(userInfo));
  };

  const carouselItems = useMemo(
    () => [
      <GetUserInfo onSubmit={getUserInfoHandler} />,
      <GetPartnerInfo
        onSubmit={getPartnerInfoHandler}
        goBackItem={goBackItem}
      />,
      <GetImages onSubmit={getImagesHandler} goBackItem={goBackItem} />,
      <GetLoveDate onSubmit={getLoveDate} goBackItem={goBackItem} />,
      // <PlanChoices goBackItem={goBackItem} onStartApp={startAppHandler} />,
      <StartApp goBackItem={goBackItem} onStartApp={startAppHandler} />
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
    borderRadius: 4,
  },
});

export default GetBasicInfoScreen;

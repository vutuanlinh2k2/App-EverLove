import React, { useState, useRef, useMemo } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useDispatch } from "react-redux";

import { backgroundColor, primaryColor } from "../constants/colors";
import { screenWidth } from "../constants/styles";
import { setUserInfo } from "../store/actions/userInfo";
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

  const startAppHandler = (isVIP) => {
    const userInfo = {
      ...userInfoRef.current,
      ...partnerInfoRef.current,
      ...imagesRef.current,
      ...loveDateRef.current,
      isVIP,
    };
    dispatch(setUserInfo(userInfo));
  };

  const carouselItems = useMemo(
    () => [
      { content: <GetUserInfo onSubmit={getUserInfoHandler} /> },
      {
        content: (
          <GetPartnerInfo
            onSubmit={getPartnerInfoHandler}
            goBackItem={goBackItem}
          />
        ),
      },
      {
        content: (
          <GetImages onSubmit={getImagesHandler} goBackItem={goBackItem} />
        ),
      },
      {
        content: <GetLoveDate onSubmit={getLoveDate} goBackItem={goBackItem} />,
      },
      {
        content: (
          <PlanChoices goBackItem={goBackItem} onStartApp={startAppHandler} />
        ),
      },
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

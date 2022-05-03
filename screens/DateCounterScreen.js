import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector } from "react-redux";

import { navigatorHeaderDefaultOptions } from "../constants/navigation";
import { dateCounterScreenTitle } from "../constants/screenTitles";
import { screenHeight, iconBottomSize } from "../constants/styles";
import { backgroundColor, primaryColor } from "../constants/colors";
import useDateCounter from "../hooks/useDateCounter";
import HeaderButton from "../components/UI/HeaderButton";
import ActionModal from "../components/UI/ActionModal/ActionModal";
import DateCounterCarousel from "../components/DateCounter/DateCounterCarousel";
import CoupleInfo from "../components/DateCounter/CoupleInfo";
import LoadingModal from "../components/UI/LoadingModal";

const DateCounterScreen = (props) => {
  const { navigation } = props;
  const [isChangingInfo, setIsChangingInfo] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const tabBarHeight = useBottomTabBarHeight();

  const loveDate = useSelector((state) => state.userInfo.loveDate);
  const { day: initialDay, month: initialMonth, year: initialYear } = loveDate;

  const { updateLoveDate, isUpdating } = useDateCounter();

  const openChangeInfo = () => {
    setIsChangingInfo(true);
  };

  const closeChangeInfo = () => {
    setIsChangingInfo(false);
  };

  const openDatePicker = () => {
    closeChangeInfo();
    setDatePickerVisible(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    const [year, month, day] = date.toISOString().substring(0, 10).split("-");
    if (day !== initialDay || month !== initialMonth || year !== initialYear) {
      updateLoveDate(day, month, year);
    }
    hideDatePicker();
  };

  useEffect(() => {
    navigation.setParams({ changeBasicInfoFunc: openChangeInfo });
  }, []);

  const actionItems = [
    {
      action: () => {},
      iconComponent: MaterialCommunityIcons,
      iconName: 'account',
      title: "Sửa thông tin bạn",
    },
    {
      action: () => {},
      iconComponent: MaterialCommunityIcons,
      iconName: 'account-heart',
      title: "Sửa thông tin người đó",
    },
    {
      action: openDatePicker,
      iconComponent: MaterialCommunityIcons,
      iconName: 'calendar-heart',
      title: "Sửa ngày yêu",
    },
  ];
  
  return (
    <View style={{ backgroundColor, flex: 1 }}>
      <View
        style={{
          justifyContent: "space-around",
          height: screenHeight - tabBarHeight - 100,
        }}
      >
        <DateCounterCarousel />
        <CoupleInfo />
      </View>
      <ActionModal
        isVisible={isChangingInfo}
        onCancel={closeChangeInfo}
        actionItems={actionItems}
      />
      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        cancelTextIOS={"Huỷ"}
        confirmTextIOS={"Chọn"}
        buttonTextColorIOS={primaryColor}
        maximumDate={new Date()}
        date={
          new Date(initialYear, `${parseInt(initialMonth) - 1}`, initialDay, 12)
        }
      />
      <LoadingModal isVisible={isUpdating} />
    </View>
  );
};

export const screenOptions = (navData) => {
  const params = navData.route.params;
  const changeBasicInfoFunc = params ? params.changeBasicInfoFunc : () => {};

  return {
    ...navigatorHeaderDefaultOptions,
    title: dateCounterScreenTitle,
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons
        name="calendar-heart"
        size={iconBottomSize}
        color={color}
      />
    ),
    headerRight: () => {
      return (
        <View style={styles.leftIcons}>
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Share" iconName="share" onPress={() => {}} />
          </HeaderButtons>
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Share"
              iconName="more-horizontal"
              onPress={changeBasicInfoFunc}
            />
          </HeaderButtons>
        </View>
      );
    },
  };
};

const styles = StyleSheet.create({
  leftIcons: {
    flexDirection: "row",
  },
});

export default DateCounterScreen;

import React, { useState, useEffect, useCallback } from "react";
import { Text, StyleSheet, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import { primaryColor, backgroundColor } from "../constants/colors";
import { appPaddingHorizontal } from "../constants/styles";
import ChangeImage from "../components/DateCounter/ChangeImages";
import ChangeInfo from "../components/DateCounter/ChangeInfo";
import HeaderButton from "../components/UI/HeaderButton";
import LoadingModal from "../components/UI/LoadingModal";
import Divider from "../components/UI/Divider";
import useChangeBasicInfo from "../hooks/useChangeBasicInfo";

const ChangeBasicInfoScreen = (props) => {
  const { route, navigation } = props;
  const isPartner = route.params.isPartner;
  const basicInfo = useSelector((state) => state.userInfo);
  const {
    name,
    nickname,
    birthday,
    gender,
    image,
    partnerName,
    partnerNickname,
    partnerGender,
    partnerBirthday,
    partnerImage,
  } = basicInfo;

  const initialName = isPartner ? partnerName : name;
  const initialNickname = isPartner ? partnerNickname : nickname;
  const initialBirthday = isPartner ? partnerBirthday : birthday;
  const initialGender = isPartner ? partnerGender : gender;
  const initialImage = isPartner ? partnerImage : image;

  const [isValid, setIsValid] = useState(true);
  const [personName, setPersonName] = useState(initialName);
  const [personNickname, setPersonNickname] = useState(initialNickname);
  const [personBirthday, setPersonBirthday] = useState(initialBirthday);
  const [personGender, setPersonGender] = useState(initialGender);
  const [personImage, setPersonImage] = useState(initialImage);

  const { isLoading, updateInfo } = useChangeBasicInfo();

  const changeName = (name) => {
    setPersonName(name);
  };

  const changeNickname = (nickname) => {
    setPersonNickname(nickname);
  };

  const changeBirthday = (birthday) => {
    setPersonBirthday(birthday);
  };

  const changeGender = (gender) => {
    setPersonGender(gender);
  };

  const updateImage = (image) => {
    setPersonImage(image);
  };

  const updateIsValid = (isValid) => {
    setIsValid(isValid);
  };

  const submitHandler = useCallback(() => {
    if (!isValid) {
      Alert.alert(
        "Lỗi",
        "Thiếu thông tin hoặc thông tin chưa thoã mãn yêu cấu.",
        [
          {
            text: "Đã hiểu",
          },
        ]
      );
      return;
    }
    if (
      personName === initialName &&
      personNickname === initialNickname &&
      personGender === initialGender &&
      personImage === initialImage &&
      personBirthday.day === initialBirthday.day &&
      personBirthday.month === initialBirthday.month &&
      personBirthday.year === initialBirthday.year
    ) {
      navigation.goBack();
      return;
    }
    const birthdayChanged =
      personBirthday.day !== initialBirthday.day ||
      personBirthday.month !== initialBirthday.month;

    if (!isPartner) {
      updateInfo(
        {
          name: personName,
          nickname: personNickname,
          birthday: personBirthday,
          gender: personGender,
          image: personImage,
        },
        initialImage,
        birthdayChanged
      );
    } else {
      updateInfo(
        {
          partnerName: personName,
          partnerNickname: personNickname,
          partnerBirthday: personBirthday,
          partnerGender: personGender,
          partnerImage: personImage,
        },
        initialImage,
        birthdayChanged
      );
    }
    navigation.goBack();
  }, [
    isPartner,
    isValid,
    personName,
    personNickname,
    personBirthday,
    personGender,
    personImage,
  ]);

  useEffect(() => {
    navigation.setParams({ submitFunction: submitHandler });
  }, [submitHandler]);

  return (
    <>
      <KeyboardAwareScrollView style={styles.screen}>
        <ChangeImage image={personImage} updateImage={updateImage} />
        <Divider />
        <ChangeInfo
          isPartner={isPartner}
          name={personName}
          setName={changeName}
          nickname={personNickname}
          setNickname={changeNickname}
          gender={personGender}
          setGender={changeGender}
          birthday={personBirthday}
          setBirthday={changeBirthday}
          setIsValid={updateIsValid}
        />
      </KeyboardAwareScrollView>
      <LoadingModal isVisible={isLoading} />
    </>
  );
};

export const screenOptions = (navData) => {
  const params = navData.route.params;
  const { isPartner, submitFunction } = params;

  return {
    headerTitle: !isPartner ? "Thông tin bạn" : "Thông tin người đó",
    presentation: "modal",
    // gestureEnabled: false,
    headerStyle: {
      backgroundColor: backgroundColor,
    },
    headerTitleStyle: {
      fontFamily: "nunito-black",
      color: "black",
    },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Share"
          iconName="x"
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <Text
        style={styles.actionText}
        onPress={() => {
          submitFunction();
        }}
      >
        Sửa
      </Text>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: appPaddingHorizontal,
  },
  actionText: {
    color: primaryColor,
    marginRight: 15,
    fontFamily: "nunito",
  },
});

export default ChangeBasicInfoScreen;

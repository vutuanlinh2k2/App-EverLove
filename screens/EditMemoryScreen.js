import React, { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet, Alert, Keyboard } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { primaryColor, backgroundColor } from "../constants/colors";
import EditMemoryForm from "../components/EditMemory/EditMemoryForm";
import EditMemoryImages from "../components/EditMemory/EditMemoryImages";
import HeaderButton from "../components/UI/HeaderButton";
import LoadingModal from "../components/UI/LoadingModal";
import useEditMemory from "../hooks/useEditMemory";
import { arrayEqual } from "../utils/general";

const EditMemoryScreen = (props) => {
  const { route, navigation } = props;
  const { memoryData } = route.params;
  const { id, title, description, images, day, month, year } = memoryData;

  const { editMemory, isUpdating } = useEditMemory();

  const [memoryTitle, setMemoryTitle] = useState(title);
  const [memoryDescription, setMemoryDescription] = useState(description);
  const [memoryImages, setMemoryImages] = useState(images);
  const [memoryDate, setMemoryDate] = useState(`${day}-${month}-${year}`);

  const updateTitle = (title) => {
    setMemoryTitle(title);
  };

  const updateDescription = (description) => {
    setMemoryDescription(description);
  };
  const updateImages = (images) => {
    setMemoryImages(images);
  };

  const updateDate = (date) => {
    setMemoryDate(date);
  };

  const submitHandler = useCallback(() => {
    if (memoryTitle === "" || memoryDate === "" || memoryImages.length === 0) {
      Alert.alert(
        "Thiếu thông tin",
        "Bạn đang điền thiếu tên kỉ niệm, ngày kỉ niệm hoặc chưa chọn ảnh.",
        [{ text: "Đã hiểu", style: "cancel" }]
      );
      return;
    }

    if (
      arrayEqual(memoryImages, images) &&
      memoryTitle === title &&
      memoryDescription === description &&
      memoryDate === `${day}-${month}-${year}`
    ) {
      navigation.goBack();
      return;
    }

    const [memoryDay, memoryMonth, memoryYear] = memoryDate.split("-");

    const updatedMemory = {
      title: memoryTitle,
      description: memoryDescription,
      images: memoryImages,
      day: memoryDay,
      month: memoryMonth,
      year: memoryYear,
    };

    editMemory(id, updatedMemory, day, month, year, images);

    navigation.goBack();
  }, [memoryTitle, memoryImages, memoryDescription, memoryDate]);

  useEffect(() => {
    navigation.setParams({ submitFunction: submitHandler });
  }, [submitHandler]);

  useEffect(() => {
    if (
      arrayEqual(memoryImages, images) &&
      memoryTitle === title &&
      memoryDescription === description &&
      memoryDate === `${day}-${month}-${year}`
    ) {
      navigation.setParams({ noChange: true });
    } else {
      navigation.setParams({ noChange: false });
    }
  }, [images, title, memoryDate, description]);

  return (
    <>
      <KeyboardAwareScrollView style={styles.screen}>
        <EditMemoryImages images={memoryImages} updateImages={updateImages} />
        <EditMemoryForm
          title={memoryTitle}
          description={memoryDescription}
          date={memoryDate}
          onChangeTitle={updateTitle}
          onChangeDescription={updateDescription}
          onChangeDate={updateDate}
          initialDay={day}
          initialMonth={month}
          initialYear={year}
        />
      </KeyboardAwareScrollView>
      <LoadingModal isVisible={isUpdating} />
    </>
  );
};

export const screenOptions = (navData) => {
  const params = navData.route.params;
  const noChange = params.noChange;
  const submitFunction = params.submitFunction;

  return {
    title: "Sửa kỉ niệm",
    presentation: "modal",
    gestureEnabled: false,
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
          title="Close"
          iconName="close"
          onPress={() => {
            noChange
              ? navData.navigation.goBack()
              : Alert.alert(
                  "Huỷ chỉnh sửa",
                  "Bạn không muốn sửa kỉ niệm này?",
                  [
                    { text: "Đúng" },
                    {
                      text: "Không",
                      onPress: () => {
                        navData.navigation.goBack();
                      },
                      style: "cancel",
                    },
                  ]
                );
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <Text
        style={styles.actionText}
        onPress={() => {
          Keyboard.dismiss();
          submitFunction();
        }}
      >
        Xong
      </Text>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  actionText: {
    color: primaryColor,
    marginRight: 15,
    fontFamily: "nunito",
  },
});

export default EditMemoryScreen;

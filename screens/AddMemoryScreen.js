import React, { useEffect, useState, useCallback } from "react";
import { Text, View, StyleSheet, Keyboard, Alert } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { primaryColor, backgroundColor } from "../constants/colors";
import { appPaddingHorizontal } from "../constants/styles";
import { useAddMemory } from "../hooks/useAddMemory";
import HeaderButton from "../components/UI/HeaderButton";
import Divider from "../components/UI/Divider";
import AddMemoryForm from "../components/AddMemory/AddMemoryForm";
import AddMemoryImages from "../components/AddMemory/AddMemoryImages";
import LoadingModal from "../components/UI/LoadingModal";

const AddMemoryScreen = (props) => {
  const { navigation } = props;
  const { upLoadMemory, isUploading } = useAddMemory();

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (
      images.length === 0 &&
      title === "" &&
      date === "" &&
      description === ""
    ) {
      navigation.setParams({ isEmpty: true });
    } else {
      navigation.setParams({ isEmpty: false });
    }
  }, [images, title, date, description]);

  const clearImages = () => {
    setImages([]);
  };

  const updateImages = (images) => {
    setImages(images);
  };

  const changeTitle = (text) => {
    setTitle(text);
  };

  const changeDate = (text) => {
    setDate(text);
  };

  const changeDescription = (text) => {
    setDescription(text);
  };

  const submitHandler = useCallback(() => {
    if (title === "" || date === "" || images.length === 0) {
      Alert.alert(
        "Thiếu thông tin",
        "Bạn có thể quên nhập tên kỉ niệm, ngày kỉ niệm hoặc chưa chọn ảnh.",
        [{ text: "Đã hiểu", style: "cancel" }]
      );
      return;
    }

    const [day, month, year] = date.split("-");

    upLoadMemory({
      title,
      description,
      images,
      day,
      month,
      year,
    });

    navigation.goBack();
  }, [title, images, description, date]);

  useEffect(() => {
    navigation.setParams({ submitFunction: submitHandler });
  }, [submitHandler]);

  return (
    <>
      <KeyboardAwareScrollView style={styles.screen}>
        <AddMemoryImages
          images={images}
          clearImages={clearImages}
          updateImages={updateImages}
        />
        <View style={{ paddingHorizontal: appPaddingHorizontal }}>
          <Divider />
          <AddMemoryForm
            title={title}
            date={date}
            description={description}
            onChangeTitle={changeTitle}
            onChangeDate={changeDate}
            onChangeDescription={changeDescription}
          />
        </View>
      </KeyboardAwareScrollView>
      <LoadingModal isVisible={isUploading} />
    </>
  );
};

export const screenOptions = (navData) => {
  const params = navData.route.params;
  const isEmpty = params.isEmpty;
  const submitFunction = params.submitFunction;

  return {
    title: "Lưu kỉ niệm",
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
          title="Share"
          iconName="x"
          onPress={() => {
            isEmpty || isEmpty === undefined
              ? navData.navigation.goBack()
              : Alert.alert("Bỏ kỉ niệm", "Bạn có muốn bỏ viết kỉ niệm này?", [
                  { text: "Không" },
                  {
                    text: "Bỏ",
                    onPress: () => {
                      navData.navigation.goBack();
                    },
                    style: "cancel",
                  },
                ]);
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
        Lưu
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

export default AddMemoryScreen;

import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { Formik } from "formik";
// import * as yup from "yup";
import { FontAwesome5 } from "@expo/vector-icons";

import { primaryColor, commonTextColor } from "../../constants/colors";
import { screenHeight, shadowDefault } from "../../constants/styles";
import { getCurrentDate } from "../../utils/addMemory";
import { convertDay } from "../../utils/general";

// const formValidationSchema = yup.object().shape({
//   title: yup
//     .string()
//     .min(3, ({ min }) => `Tên kỉ niệm phải có ít nhất ${min} kí tự.`)
//     .max(30, ({ max }) => `Tên kỉ niệm phải có ít hơn ${max + 1} kí tự.`)
//     .required("Hãy nhập tên kỉ niệm bạn !"),
//   description: yup
//     .string()
//     .max(199, ({ max }) => `Phần mô tả phải có ít hơn ${max + 1} kí tự.`),
// });

const AddMemoryForm = (props) => {
  const {
    title,
    date,
    description,
    onChangeTitle,
    onChangeDate,
    onChangeDescription,
  } = props;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    onChangeDate(convertDay(date));
    hideDatePicker();
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.titleInput}
        selectionColor={primaryColor}
        placeholder="Tên kỷ niệm*"
        multiline
        numberOfLines={2}
        maxLength={40}
        value={title}
        onChangeText={onChangeTitle}
      />
      <View style={styles.dateInputContainer}>
        <FontAwesome5
          style={styles.icon}
          name="calendar-day"
          size={24}
          color={primaryColor}
        />
        <TextInput
          style={styles.dateInput}
          selectionColor={primaryColor}
          placeholder="Chọn ngày*"
          editable={false}
          onPressOut={showDatePicker}
          value={date}
        />
      </View>
      <TextInput
        selectionColor={primaryColor}
        placeholder="Mô tả"
        style={styles.description}
        multiline
        maxLength={200}
        value={description}
        onChangeText={onChangeDescription}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        cancelTextIOS={"Huỷ"}
        confirmTextIOS={"Chọn"}
        buttonTextColorIOS={primaryColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
  titleInput: {
    fontFamily: "nunito-black",
    fontSize: 20,
    color: commonTextColor,
  },
  dateInputContainer: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    color: commonTextColor,
  },
  icon: {
    marginRight: 7.5,
  },
  dateInput: {
    fontFamily: "nunito-bold",
    color: commonTextColor,
  },
  description: {
    fontFamily: "nunito",
    color: commonTextColor,
  },
});

export default AddMemoryForm;

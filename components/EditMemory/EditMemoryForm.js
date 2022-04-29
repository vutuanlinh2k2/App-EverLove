import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome5 } from "@expo/vector-icons";

import Divider from "../UI/Divider";
import { primaryColor, commonTextColor } from "../../constants/colors";
import { appPaddingHorizontal } from "../../constants/styles";
import { currentDateObj } from "../../utils/general";
import { convertDay } from "../../utils/general";

const AddMemoryForm = (props) => {
  const {
    title,
    date,
    description,
    onChangeTitle,
    onChangeDate,
    onChangeDescription,
    initialDay,
    initialMonth,
    initialYear,
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
      <Divider />
      <TextInput
        style={styles.titleInput}
        selectionColor={primaryColor}
        placeholder="Tên kỉ niệm*"
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
        maximumDate={new Date()}
        date={
          new Date(initialYear, `${parseInt(initialMonth) - 1}`, initialDay, 12)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: appPaddingHorizontal,
  },
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

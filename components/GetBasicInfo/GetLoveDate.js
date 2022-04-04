import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { primaryColor, commonTextColor } from "../../constants/colors";
import {
  screenHeight,
  shadowDefault,
  appPaddingHorizontal,
  availableWidth,
} from "../../constants/styles";
import { convertBirthday as convertDay } from "../../utils/getBasicInfo";
import ContinueButton from "./UI/ContinueButton";
import ScreenHeader from "./UI/ScreenHeader";
import MoreInfoText from "./UI/MoreInfotext";
import GoBackButton from "./UI/GoBackButton";

const GetLoveDate = (props) => {
  const { goBackItem, onSubmit } = props;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [trySubmit, setTrySubmit] = useState(false);
  const [loveDate, setLoveDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setLoveDate(convertDay(date));
    hideDatePicker();
  };
  const submitHandler = () => {
    if (loveDate === "") {
      setTrySubmit(true);
      return;
    }
    const [day, month, year] = loveDate.split("-");
    onSubmit({ loveDate: { day, month, year } });
  };

  return (
    <View style={styles.screen}>
      {/* <View style={styles.header}> */}

      <View style={styles.form}>
        <View style={styles.mainForm}>
          <View>
            <ScreenHeader title="Chọn ngày bắt đầu yêu" />
            <View
              style={[
                styles.inputContainer,
                trySubmit && loveDate === "" ? styles.errorInput : {},
              ]}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="calendar-heart"
                  size={24}
                  color={primaryColor}
                />
              </View>
              <TextInput
                name="birthday"
                placeholder="dd/mm/yyyy"
                selectionColor={primaryColor}
                style={styles.textInput}
                value={loveDate}
                onPressOut={showDatePicker}
                editable={false}
              />
            </View>
            <MoreInfoText text="* Bạn có thể thay đổi thông tin này sau." />
          </View>
        </View>
        <View>
          <GoBackButton onPress={goBackItem} />
          <ContinueButton onPress={submitHandler} />
        </View>
      </View>

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
  screen: {
    flex: 1,
    marginHorizontal: appPaddingHorizontal,
  },
  form: {
    justifyContent: "space-between",
    flex: 1,
  },
  mainForm: {
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    ...shadowDefault,
    height: screenHeight / 15,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: "white",
  },
  iconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    color: commonTextColor,
    flex: 1,
    marginLeft: 10,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: "red",
  },
});

export default GetLoveDate;

import React, { useState, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";

import { primaryColor, commonTextColor } from "../../constants/colors";
import {
  screenHeight,
  shadowDefault,
  availableWidth,
} from "../../constants/styles";
import { convertDay } from "../../utils/getBasicInfo";

const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 30;
const MAX_NICKNAME_LENGTH = 15;

const ChangeInfo = (props) => {
  const {
    isPartner,
    gender,
    name,
    setName,
    nickname,
    setNickname,
    setGender,
    birthday,
    setBirthday,
    setIsValid,
  } = props;

  const transformedBirthday = useMemo(() => {
    return `${birthday.day}-${birthday.month}-${birthday.year}`;
  }, [birthday]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [nameError, setNameError] = useState(null);
  const [nicknameError, setNicknameError] = useState(null);
  const [genderError, setGenderError] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const transformedDate = convertDay(date);
    const [day, month, year] = transformedDate.split("-");
    setBirthday({
      day,
      month,
      year,
    });
    hideDatePicker();
  };

  useEffect(() => {
    if (name.length < MIN_NAME_LENGTH) {
      setNameError(`Tên của bạn phải có ít nhất ${MIN_NAME_LENGTH} kí tự.`);
      setIsValid(false);
    } else if (name.length > MAX_NAME_LENGTH) {
      setNameError(
        `Tên của bạn phải có ít hơn hoặc bằng ${MAX_NAME_LENGTH} kí tự.`
      );
      setIsValid(false);
    } else {
      setNameError(null);
      setIsValid(true);
    }
  }, [name]);

  useEffect(() => {
    if (nickname.length > MAX_NICKNAME_LENGTH) {
      setNicknameError(
        `Tên của bạn phải có ít hơn hoặc bằng ${MAX_NICKNAME_LENGTH} kí tự.`
      );
      setIsValid(false);
    } else {
      setNicknameError(null);
      setIsValid(true);
    }
  }, [nickname]);

  useEffect(() => {
    if (!gender) {
      setGenderError(true);
      setIsValid(false);
    } else {
      setGenderError(false);
      setIsValid(true);
    }
  }, [gender]);

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <View style={styles.mainForm}>
          <View>
            <View
              style={[styles.inputContainer, nameError && styles.errorInput]}
            >
              <Text style={styles.inputName}>
                {!isPartner ? "Tên của bạn*" : "Tên người đó*"}
              </Text>
              <TextInput
                name="name"
                selectionColor={primaryColor}
                style={styles.textInput}
                onChangeText={(text) => {
                  setName(text);
                }}
                value={name}
                keyboardType="default"
              />
            </View>
            {nameError && <Text style={styles.errorText}>{nameError}</Text>}
            <View
              style={[
                styles.inputContainer,
                nicknameError && styles.errorInput,
              ]}
            >
              <Text style={styles.inputName}>
                {!isPartner ? "Biệt danh của bạn" : "Biệt danh người đó"}
              </Text>
              <TextInput
                name="nickname"
                selectionColor={primaryColor}
                style={styles.textInput}
                onChangeText={(text) => {
                  setNickname(text);
                }}
                value={nickname}
                keyboardType="default"
              />
            </View>
            {nicknameError && (
              <Text style={styles.errorText}>{nicknameError}</Text>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={[styles.inputContainer, { width: availableWidth / 2 - 5 }]}
            >
              <Text style={styles.inputName}>Sinh nhật*</Text>
              <TextInput
                name="birthday"
                placeholder="dd-mm-yyyy"
                defaultValue={transformedBirthday}
                selectionColor={primaryColor}
                style={styles.textInput}
                // value={birthday}
                onPressOut={showDatePicker}
                editable={false}
              />
            </View>
            <View
              style={[
                styles.inputContainer,
                { width: availableWidth / 2 - 5 },
                genderError && styles.errorInput,
              ]}
            >
              <Text style={styles.inputName}>Giới tính*</Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <RNPickerSelect
                  style={{
                    inputIOS: { color: commonTextColor },
                    inputAndroid: { color: commonTextColor },
                  }}
                  onValueChange={(value) => setGender(value)}
                  placeholder={{ label: "Chọn giới tính", value: null }}
                  items={[
                    {
                      label: "Nữ",
                      value: "female",
                    },
                    { label: "Nam", value: "male" },
                  ]}
                  value={gender}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* )}
      </Formik> */}
      {/* </View> */}
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
          new Date(
            birthday.year,
            `${parseInt(birthday.month) - 1}`,
            birthday.day,
            12
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  form: {
    flex: 1,
  },
  mainForm: {
    flex: 1,
  },
  inputContainer: {
    ...shadowDefault,
    height: screenHeight / 11,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputName: {
    color: primaryColor,
    fontFamily: "nunito",
  },
  iconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    color: commonTextColor,
    flex: 1,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: "red",
  },
  errorText: {
    fontFamily: "nunito",
    fontSize: 10.5,
    color: "black",
    marginLeft: 15,
    marginBottom: 5,
    marginTop: -10,
  },
});

export default ChangeInfo;

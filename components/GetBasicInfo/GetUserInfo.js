import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";

import { primaryColor, commonTextColor } from "../../constants/colors";
import {
  screenHeight,
  shadowDefault,
  appPaddingHorizontal,
  availableWidth,
} from "../../constants/styles";
import { convertDay, getZodiac } from "../../utils/getBasicInfo";
import ContinueButton from "./UI/ContinueButton";
import ScreenHeader from "./UI/ScreenHeader";
import MoreInfoText from "./UI/MoreInfotext";

const loginValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, ({ min }) => `Tên của bạn phải có ít nhất ${min} kí tự.`)
    .max(30, ({ max }) => `Tên của bạn phải có ít hơn ${max + 1} kí tự.`)
    .required("Hãy nhập tên của bạn !"),
  nickname: yup
    .string()
    .max(15, ({ max }) => `Biệt danh của bạn phải có ít hơn ${max + 1} kí tự.`),
});

const GetUserInfo = (props) => {
  const { onSubmit } = props;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [trySubmit, setTrySubmit] = useState(false);
  const [birthdayInput, setBirthdayInput] = useState();
  const [gender, setGender] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBirthdayInput(convertDay(date));
    hideDatePicker();
  };

  const trySubmitHandler = () => {
    setTrySubmit(true);
  };

  return (
    <View style={styles.screen}>
      {/* <View style={styles.header}> */}
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ name: "", nickname: "" }}
        onSubmit={(values) => {
          const [day, month, year] = birthdayInput.split("-");
          const zodiac = getZodiac(parseInt(day), parseInt(month));
          const userInfo = {
            ...values,
            birthday: {
              day,
              month,
              year,
            },
            gender,
            zodiac,
          };
          onSubmit(userInfo);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <View style={styles.form}>
            <View style={styles.mainForm}>
              <View>
                <ScreenHeader title="Thông tin bạn" />
                <View
                  style={[
                    styles.inputContainer,
                    (trySubmit && !touched.name) ||
                    (errors.name && touched.name)
                      ? styles.errorInput
                      : {},
                  ]}
                >
                  <Text style={styles.inputName}>Tên của bạn*</Text>
                  <TextInput
                    name="name"
                    placeholder="abc"
                    selectionColor={primaryColor}
                    style={styles.textInput}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    keyboardType="default"
                  />
                </View>
                {errors.name && touched.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
                <View
                  style={[
                    styles.inputContainer,
                    trySubmit && errors.nickname ? styles.errorInput : {},
                  ]}
                >
                  <Text style={styles.inputName}>Biệt danh của bạn</Text>
                  <TextInput
                    name="nickname"
                    placeholder="abc"
                    selectionColor={primaryColor}
                    style={styles.textInput}
                    onChangeText={handleChange("nickname")}
                    onBlur={handleBlur("nickname")}
                    value={values.nickname}
                    keyboardType="default"
                  />
                </View>
                {errors.nickname && touched.nickname && (
                  <Text style={styles.errorText}>{errors.nickname}</Text>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={[
                    styles.inputContainer,
                    { width: availableWidth / 2 - 5 },
                    trySubmit && !birthdayInput ? styles.errorInput : {},
                  ]}
                >
                  <Text style={styles.inputName}>Sinh nhật*</Text>
                  <TextInput
                    name="birthday"
                    placeholder="dd/mm/yyyy"
                    selectionColor={primaryColor}
                    style={styles.textInput}
                    onBlur={handleBlur("birthday")}
                    value={birthdayInput}
                    onPressOut={showDatePicker}
                    editable={false}
                  />
                </View>
                <View
                  style={[
                    styles.inputContainer,
                    { width: availableWidth / 2 - 5 },
                    trySubmit && !gender ? styles.errorInput : {},
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
                    />
                  </View>
                </View>
              </View>
              <MoreInfoText text="* Bạn có thể thay đổi các thông tin này sau." />
            </View>
            <ContinueButton
              onPress={
                !isValid || !birthdayInput || !gender
                  ? trySubmitHandler
                  : handleSubmit
              }
            />
          </View>
        )}
      </Formik>
      {/* </View> */}
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

export default GetUserInfo;

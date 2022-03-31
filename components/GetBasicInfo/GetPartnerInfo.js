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
import { convertBirthday } from "../../utils/getBasicInfo";
import ContinueButton from "./UI/ContinueButton";
import ScreenHeader from "./UI/ScreenHeader";
import MoreInfoText from "./UI/MoreInfotext";
import GoBackButton from "./UI/GoBackButton";

const loginValidationSchema = yup.object().shape({
  partnerName: yup
    .string()
    .min(3, ({ min }) => `Tên của người ấy phải có ít nhất ${min} kí tự.`)
    .max(30, ({ max }) => `Tên của người ấy phải có ít hơn ${max + 1} kí tự.`)
    .required("Hãy nhập tên của người ấy !"),
  partnerNickname: yup
    .string()
    .max(15, ({ max }) => `Biệt danh của người ấy phải có ít hơn ${max + 1} kí tự.`),
});

const GetPartnerInfo = (props) => {
  const { goBackItem, onGoToNextItem } = props;

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
    setBirthdayInput(convertBirthday(date));
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
        initialValues={{ partnerName: "", partnerNickname: "" }}
        onSubmit={(values) => {
          const [day, month, year] = birthdayInput.split("-");
          console.log({
            ...values,
            partnerBirthday: {
              day,
              month,
              year,
            },
            partnerGender: gender,
          });
          onGoToNextItem();
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
                <ScreenHeader title="Thông tin người ấy" />
                <View
                  style={[
                    styles.inputContainer,
                    (trySubmit && !touched.partnerName) ||
                    (errors.partnerName && touched.partnerName)
                      ? styles.errorInput
                      : {},
                  ]}
                >
                  <Text style={styles.inputName}>Tên của người ấy*</Text>
                  <TextInput
                    name="partnerName"
                    placeholder="abc"
                    selectionColor={primaryColor}
                    style={styles.textInput}
                    onChangeText={handleChange("partnerName")}
                    onBlur={handleBlur("partnerName")}
                    value={values.partnerName}
                    keyboardType="default"
                  />
                </View>
                {errors.partnerName && touched.partnerName && (
                  <Text style={styles.errorText}>{errors.partnerName}</Text>
                )}
                <View
                  style={[
                    styles.inputContainer,
                    trySubmit && errors.partnerNickname
                      ? styles.errorInput
                      : {},
                  ]}
                >
                  <Text style={styles.inputName}>Biệt danh của nguời ấy</Text>
                  <TextInput
                    name="partnerNickname"
                    placeholder="abc"
                    selectionColor={primaryColor}
                    style={styles.textInput}
                    onChangeText={handleChange("partnerNickname")}
                    onBlur={handleBlur("partnerNickname")}
                    value={values.partnerNickname}
                    keyboardType="default"
                  />
                </View>
                {errors.partnerNickname && touched.partnerNickname && (
                  <Text style={styles.errorText}>{errors.partnerNickname}</Text>
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
                      textInputProps={{
                        style: { color: commonTextColor },
                      }}
                      onValueChange={(value) => setGender(value)}
                      placeholder={{ label: "Chọn giới tính", value: null }}
                      items={[
                        { label: "Nữ", value: "female" },
                        { label: "Nam", value: "male" },
                      ]}
                    />
                  </View>
                </View>
              </View>
              <MoreInfoText />
            </View>
            <View>
            <GoBackButton onPress={goBackItem} />
              <ContinueButton
                onPress={
                  !isValid || !birthdayInput || !gender
                    ? trySubmitHandler
                    : handleSubmit
                }
              />
          
            </View>
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

export default GetPartnerInfo;

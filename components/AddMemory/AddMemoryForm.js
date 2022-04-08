import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import {
  primaryColor,
  commonTextColor,
} from "../../constants/colors";
import { screenHeight, shadowDefault } from "../../constants/styles";

const formValidationSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, ({ min }) => `Tựa đề phải có ít nhất ${min} kí tự.`)
    .max(30, ({ max }) => `Tựa đề phải có ít hơn ${max + 1} kí tự.`)
    .required("Hãy nhập tựa đề cho kỉ niệm bạn !"),
  description: yup
    .string()
    .max(199, ({ max }) => `Phần mô tả phải có ít hơn ${max + 1} kí tự.`),
});

const AddMemoryForm = (props) => {
  return (
    <View style={styles.screen}>
      <Formik
        validationSchema={formValidationSchema}
        initialValues={{ title: "", description: "" }}
        onSubmit={(values) => {
          console.log(values);
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
          <>
            <Text style={styles.inputName}>Kỉ niệm*</Text>
            <View style={[styles.inputContainer]}>
              <TextInput
                name="title"
                placeholder="abc"
                selectionColor={primaryColor}
                style={styles.textInput}
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                keyboardType="default"
              />
            </View>
            <Text style={styles.inputName}>Mô tả</Text>
            <View style={[styles.inputContainer]}>
              <TextInput
                name="description"
                placeholder="abc"
                selectionColor={primaryColor}
                style={styles.textInput}
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                keyboardType="default"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
  inputContainer: {
    ...shadowDefault,
    height: screenHeight / 15,
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputName: {
    color: primaryColor,
    fontFamily: "nunito",
  },
  textInput: {
    color: commonTextColor,
    flex: 1,
  },
});

export default AddMemoryForm;

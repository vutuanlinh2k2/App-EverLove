import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Feather } from "@expo/vector-icons";
import * as yup from "yup";

import { primaryColor } from "../../constants/colors";
import { screenHeight, shadowDefault } from "../../constants/styles";
import InputWithIcon from "../UI/InputWithIcon";
import { signUp, logIn } from "../../store/actions/auth";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Hãy điền email hợp lệ.")
    .required("Hãy nhập email của bạn."),
  password: yup
    .string()
    .min(8, ({ min }) => `Mật khẩu phải có ít nhất ${min} kí tự.`)
    .required("Hãy nhập mật khẩu cho tài khoản của bạn."),
});

const AuthInputs = (props) => {
  const { isSignup } = props;
  const dispatch = useDispatch();
  return (
    <View style={styles.inputsContainer}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={
          isSignup
            ? (values) => dispatch(signUp(values.email, values.password))
            : (values) => dispatch(logIn(values.email, values.password))
        }
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
            <InputWithIcon
              IconComponent={Feather}
              iconName="mail"
              name="email"
              placeholder="Địa chỉ email"
              selectionColor={primaryColor}
              style={styles.textInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <InputWithIcon
              IconComponent={Feather}
              iconName="lock"
              name="password"
              placeholder="Mật khẩu"
              selectionColor={primaryColor}
              style={styles.textInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={!isValid ? () => {} : handleSubmit}
            >
              <Text style={styles.buttonText}>
                {!isSignup ? "Đăng nhập" : "Đăng ký"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    marginTop: 15,
  },
  button: {
    ...shadowDefault,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight / 15,
    width: "100%",
    borderRadius: 15,
    backgroundColor: primaryColor,
    marginTop: 10,
  },
  buttonText: {
    fontFamily: "nunito-bold",
    color: "white",
  },
  errorText: {
    fontFamily: "nunito",
    fontSize: 10.5,
    color: "red",
    marginLeft: 50,
    marginBottom: 5,
  },
});

export default AuthInputs;

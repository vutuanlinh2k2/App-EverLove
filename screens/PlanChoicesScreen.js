import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { primaryColor, backgroundColor } from "../constants/colors";
import {
  appPaddingHorizontal,
  screenHeight,
  shadowDefault,
} from "../constants/styles";
import { plans } from "../constants/plans";
import PlanChoiceItem from "../components/PlanChoices/PlanChoiceItem";
import HeaderTitle from "../components/UI/HeaderTitle";

const PlanChoicesScreen = (props) => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <HeaderTitle title={'Chọn Gói'} />
        {plans.map((plan, index) => {
          const { title, price, features } = plan;
          return (
            <PlanChoiceItem
              key={title}
              title={title}
              price={price}
              features={features}
              onPress={() => {
                setSelectedPlan(index);
              }}
              isSelected={index === selectedPlan}
            />
          );
        })}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: appPaddingHorizontal,
  },
  button: {
    ...shadowDefault,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight / 15,
    borderRadius: 15,
    backgroundColor: primaryColor,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "nunito-bold",
  },
});

export default PlanChoicesScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import GoBackButton from "./UI/GoBackButton";
import { primaryColor, backgroundColor } from "../../constants/colors";
import {
  appPaddingHorizontal,
  screenHeight,
  shadowDefault,
} from "../../constants/styles";
import { plans } from "../../constants/plans";
import PlanChoiceItem from "./UI/PlanChoiceItem";
import ScreenHeader from "./UI/ScreenHeader";

const PlanChoices = (props) => {
  const { goBackItem } = props;
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View>
          <ScreenHeader title={"Chọn Gói"} />
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
        </View>
      </View>
      <View>
        <GoBackButton onPress={goBackItem} />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Bắt đầu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: appPaddingHorizontal,
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: appPaddingHorizontal,
  },
  header: {
    justifyContent: "center",
    flex: 1,
  },
  button: {
    ...shadowDefault,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight / 15,
    borderRadius: 15,
    backgroundColor: primaryColor,
  },
  buttonText: {
    color: "white",
    fontFamily: "nunito-bold",
  },
});

export default PlanChoices;

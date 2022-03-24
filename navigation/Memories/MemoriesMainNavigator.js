import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { primaryColor, backgroundColor, greyColor } from "../../constants/colors";
import MemoriesItems from '../../screens/Memories/MemoriesItemsScreen';
import MemoriesDayScreen from "../../screens/Memories/MemoriesDayScreen";
import MemoriesMonthScreen from "../../screens/Memories/MemoriesMonthScreen";
import MemoriesYearScreen from "../../screens/Memories/MemoriesYearScreen";

const MemoriesMaterialTopTabNavigator = createMaterialTopTabNavigator();

const MemoriesMainNavigator = () => {
  return (
    <MemoriesMaterialTopTabNavigator.Navigator
      initialRouteName="MemoriesAll"
      style={{backgroundColor: backgroundColor}}
      screenOptions={{
        swipeEnabled: false,
        lazy: true,
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          marginHorizontal: 20,
          marginVertical: 10,
          borderRadius: 25,
          overflow: 'hidden',
          height: 40,
          borderColor: greyColor,
          borderWidth: 1,
        },
        tabBarIndicatorStyle: {
          backgroundColor: primaryColor,
          backgroundColor: 'white',
        },
        tabBarLabelStyle: {
          fontFamily: "nunito-bold",
          textTransform: 'capitalize',
          fontSize: 12
        },
        tabBarContentContainerStyle: {
          alignItems: "center",
          height: '100%',
        },
        tabBarItemStyle: {
          borderColor: greyColor,
          borderWidth: 0.5,
        }
      }}
    >
      <MemoriesMaterialTopTabNavigator.Screen
        name="MemoriesAll"
        component={MemoriesItems}
        options={{title: 'Tất cả'}}
      />
      <MemoriesMaterialTopTabNavigator.Screen
        name="MemoriesDayMain"
        component={MemoriesDayScreen}
        options={{title: 'Ngày'}}
      />
      <MemoriesMaterialTopTabNavigator.Screen
        name="MemoryMonthMain"
        component={MemoriesMonthScreen}
        options={{title: 'Tháng'}}
      />
      <MemoriesMaterialTopTabNavigator.Screen
        name="MemoryYearMain"
        component={MemoriesYearScreen}
        options={{title: 'Năm'}}
      />
    </MemoriesMaterialTopTabNavigator.Navigator>
  );
};

export default MemoriesMainNavigator;

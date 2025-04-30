import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ScheduleScreen from "./schedule";
import CustomTopTabBar from "@/components/CustomTopTabBar";

const Tab = createMaterialTopTabNavigator();

export default function ScheduleTabs() {
  return (
    <Tab.Navigator
      tabBar={(props: any) => <CustomTopTabBar {...props} />}
      screenOptions={{
        tabBarPressColor: "transparent",
        lazy: true,
      }}
    >
      <Tab.Screen name="Upcoming" component={ScheduleScreen} />
      <Tab.Screen name="Past" component={ScheduleScreen} />

    </Tab.Navigator>
  );
}

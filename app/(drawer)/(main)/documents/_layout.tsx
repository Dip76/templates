import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomTopTabBar from "@/components/CustomTopTabBar";
import documentScreen from "./documents";
import { SafeAreaView } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function DocumentsTab() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        tabBar={(props: any) => <CustomTopTabBar {...props} showBackIcon={true} />}
        screenOptions={{
          tabBarPressColor: "transparent",
          lazy: true,
        }}
      >
        <Tab.Screen name="Missing" component={documentScreen} />
        <Tab.Screen name="Uploaded" component={documentScreen} />

      </Tab.Navigator>
    </SafeAreaView>
  );
}

import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import ScheduleCard from "@/components/ScheduleCard";
import { ScheduleScreenStyles } from "@/theme/styles";

export default function ScheduleScreen() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={ScheduleScreenStyles.container}>
        <StatusBar style="light" translucent={false} />
        <ScrollView style={ScheduleScreenStyles.content}>
          <ScheduleCard />
        </ScrollView>
      </View >
    </SafeAreaView>
  );
}
import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import NoEarningIcon from '../../../assets/svgs/NoEarningIcon.svg';
import { IncomeScreenStyles } from "@/theme/styles";

export default function IncomeScreen() {
  return (
    <SafeAreaView style={IncomeScreenStyles.container}>
      <View style={IncomeScreenStyles.wrapper}>
        <View style={IncomeScreenStyles.centerContent}>
          <NoEarningIcon />
          <Text style={IncomeScreenStyles.emptyTitle}>No earnings yet</Text>
        </View>

        <Text style={IncomeScreenStyles.emptyDescription}>
          Showing earnings for shifts from the last 3 months which were approved by your employer
        </Text>
      </View>
    </SafeAreaView>
  );
}

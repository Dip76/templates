import { View, Text, TouchableOpacity } from "react-native"
import { Fontisto } from "@expo/vector-icons"
import React from "react"
import { RFValue } from "react-native-responsive-fontsize"
import { Color } from "@/theme/Colors"
import { IncomeCardstyles } from "@/theme/styles"
import { router } from "expo-router"

const IncomeCard = () => {
  return (
    <TouchableOpacity style={IncomeCardstyles.incomeCard}>
      <View style={IncomeCardstyles.incomeLeft}>
        <Fontisto name="wallet" size={RFValue(80)} color={Color.primary} />
      </View>
      <View style={IncomeCardstyles.incomeRight}>
        <View style={IncomeCardstyles.incomeMiddle}>
          <Text style={IncomeCardstyles.incomeTitle}>Income</Text>
          <Text style={IncomeCardstyles.incomeSubtitle}>View your income</Text>
        </View>
          <TouchableOpacity style={IncomeCardstyles.viewButton} onPress={() => router.push("/income")}>
            <Text style={IncomeCardstyles.viewButtonText}>VIEW</Text>
          </TouchableOpacity>

      </View>
    </TouchableOpacity>
  )
}



export default IncomeCard

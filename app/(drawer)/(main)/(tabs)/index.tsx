import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import ProfilePhoto from "@/components/ProfilePhoto";
import Employers from "@/components/Employers";
import ScheduleCard from "@/components/ScheduleCard";
import NoOffersCard from "@/components/NoOffersCard";
import IncomeCard from "@/components/IncomeCard";
import NotificationCard from "@/components/NotificationCard";
import { HomeScreenstyles } from "@/theme/styles";
import { RFValue } from "react-native-responsive-fontsize";
import { Color } from "@/theme/Colors";


export default function index() {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      header: () => (<Header />),
    });
  }, []);


  return (
    <View style={HomeScreenstyles.container}>
      <StatusBar style="light" translucent={false} backgroundColor={Color.primary} />
      <ScrollView style={HomeScreenstyles.content} contentContainerStyle={{ paddingBottom: RFValue(20) }} showsVerticalScrollIndicator={false}>
        <Text style={HomeScreenstyles.SectionText}>Things To Do</Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <ProfilePhoto />
        </View>

        <Text style={[HomeScreenstyles.SectionText, { paddingVertical: RFValue(5) }]}>Employers</Text>
        <Employers />

        <Text style={[HomeScreenstyles.SectionText, { paddingVertical: RFValue(5) }]}>My Schedule</Text>
        <ScheduleCard />

        <View style={HomeScreenstyles.offersCard}>
          <NoOffersCard />
        </View>

        <IncomeCard />

        <NotificationCard />
      </ScrollView>
    </View>
  );
}
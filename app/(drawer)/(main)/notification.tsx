import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NotificationScreenStyles } from "@/theme/styles";



export default function NotificationsScreen() {
  return (
    <View style={NotificationScreenStyles.container}>
      <StatusBar style="dark" translucent={false} />
      <ScrollView style={NotificationScreenStyles.content}>
        <View style={NotificationScreenStyles.notificationItem}>
          <Text style={NotificationScreenStyles.notificationText}>
            <Text style={NotificationScreenStyles.bookedText}>Booked</Text> for the job <Text style={NotificationScreenStyles.boldText}>OTS Test, 4/25/2025</Text>
          </Text>
          <Text style={NotificationScreenStyles.notificationTime}>6 days ago, Tuesday, April 1, 5:04 PM</Text>
        </View>

        <View style={NotificationScreenStyles.divider} />

        <View style={NotificationScreenStyles.notificationItem}>
          <Text style={NotificationScreenStyles.notificationText}>
            <Text style={NotificationScreenStyles.bookedText}>Booked</Text> for the job <Text style={NotificationScreenStyles.boldText}>Test Event Test, 4/24/2025</Text>
          </Text>
          <Text style={NotificationScreenStyles.notificationTime}>6 days ago, Tuesday, April 1, 4:42 PM</Text>
        </View>

        <View style={NotificationScreenStyles.divider} />
      </ScrollView>
    </View>
  );
}
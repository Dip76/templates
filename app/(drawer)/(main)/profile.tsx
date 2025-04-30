import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { ProfileScreenStyles } from "@/theme/styles";
import { Color } from "@/theme/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { useRouter } from "expo-router";
import AvatarImage from "@/components/AvatarImage";

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <ScrollView style={ProfileScreenStyles.container}>
      <StatusBar style="dark" translucent={false} />
      <View style={ProfileScreenStyles.profileHeader}>
        <AvatarImage iconSize={RFValue(75)} />
        <View style={ProfileScreenStyles.profileInfo}>
          <Text style={ProfileScreenStyles.profileName}>Jenis Shah</Text>
          <Text style={ProfileScreenStyles.profilePhone}>098984 73369</Text>
          <TouchableOpacity style={ProfileScreenStyles.editButton} onPress={() => router.push('/editprofile')}>
            <Ionicons name="pencil" size={RFValue(18)} color={Color.white} />
            <Text style={ProfileScreenStyles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ProfileScreenStyles.section}>
        <Text style={ProfileScreenStyles.sectionTitle}>My Employers <Text style={ProfileScreenStyles.count}>(1)</Text></Text>
        <View style={ProfileScreenStyles.divider} />

        <TouchableOpacity style={ProfileScreenStyles.employerItem} onPress={() => router.push('/eventInfo')}>
          <Image
            source={require("../../../assets/elevate-logo.png")}
            style={ProfileScreenStyles.employerLogo}
          />
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={ProfileScreenStyles.employerName}>Elevate Events</Text>
            <Ionicons name="chevron-forward" size={RFValue(24)} color={Color.black} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


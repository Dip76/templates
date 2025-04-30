import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { SidebarContentstyles } from "@/theme/styles";
import { RFValue } from "react-native-responsive-fontsize";
import { Color } from "@/theme/Colors";
import ElevateLogo from '../assets/svgs/ElevateLogo.svg'
import AvatarImage from "./AvatarImage";

export default function SidebarContent(props: any) {

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={SidebarContentstyles.container}>
      <View style={SidebarContentstyles.logoContainer}>
        <ElevateLogo width={RFValue(100)} height={RFValue(40)} />
      </View>
      <TouchableOpacity style={SidebarContentstyles.header} onPress={() => { router.push('/(drawer)/(main)/profile') }}>
        <AvatarImage iconSize={RFValue(40)} imageUrl='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg' />
        <Text style={SidebarContentstyles.userName}>Jenis Shah</Text>
      </TouchableOpacity>

      <View style={SidebarContentstyles.menuItems}>
        <TouchableOpacity
          style={SidebarContentstyles.menuItem}
          onPress={() => { router.push("/income") }}
        >
          <View style={SidebarContentstyles.menuIconContainer}>
            <Ionicons name="wallet-outline" size={RFValue(20)} color={Color.black} />
          </View>
          <Text style={SidebarContentstyles.menuText}>Income</Text>
        </TouchableOpacity>

        <TouchableOpacity style={SidebarContentstyles.menuItem} onPress={() => { router.push("/(drawer)/(main)/myrequest") }}>
          <View style={SidebarContentstyles.menuIconContainer}>
            <Ionicons name="paper-plane-outline" size={RFValue(20)} color={Color.black} />
          </View>
          <Text style={SidebarContentstyles.menuText}>My Requests</Text>
        </TouchableOpacity>

        <TouchableOpacity style={SidebarContentstyles.menuItem} onPress={() => router.push('/(drawer)/(main)/documents/documents')}>
          <View style={SidebarContentstyles.menuIconContainer}>
            <Ionicons name="document-outline" size={RFValue(20)} color={Color.black} />
          </View>
          <Text style={SidebarContentstyles.menuText}>Documents</Text>
        </TouchableOpacity>

        <TouchableOpacity style={SidebarContentstyles.menuItem} onPress={() => { router.push('/settings') }}>
          <View style={SidebarContentstyles.menuIconContainer}>
            <Ionicons name="settings-outline" size={RFValue(20)} color={Color.black} />
          </View>
          <Text style={SidebarContentstyles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={SidebarContentstyles.menuItem}
          onPress={() => { router.push("/join-company") }}>
          <View style={SidebarContentstyles.menuIconContainer}>
            <Ionicons name="people-outline" size={RFValue(20)} color={Color.black} />
          </View>
          <Text style={SidebarContentstyles.menuText}>Join a Company</Text>
        </TouchableOpacity>

        <TouchableOpacity style={SidebarContentstyles.menuItem}>
          <View style={SidebarContentstyles.menuIconContainer}>
            <Ionicons name="help-circle-outline" size={RFValue(20)} color={Color.black} />
          </View>
          <Text style={SidebarContentstyles.menuText}>Technical support</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={SidebarContentstyles.menuItem}
          onPress={() => { router.replace('/(auth)/login') }}
        >
          <View style={SidebarContentstyles.menuIconContainer}>
            <Ionicons name="log-out-outline" size={RFValue(20)} color={Color.black} />
          </View>
          <Text style={SidebarContentstyles.menuText}>Log out</Text>
        </TouchableOpacity>
      </View>

      <View style={SidebarContentstyles.footer}>
        <Text style={SidebarContentstyles.version}>Version 40.8 (2257)</Text>
        <TouchableOpacity>
          <Text style={SidebarContentstyles.terms}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}


import { Tabs, useNavigation } from "expo-router";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Color } from "@/theme/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import withAuthProtection from "@/hoc/withAuthProtection";

const TabsLayout = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Color.primary,
          tabBarInactiveTintColor: Color.primary,
          tabBarStyle: styles.tabBar,
          tabBarHideOnKeyboard: true,
          headerShown: true,
          header: ({ options }: any) => (
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" size={RFValue(24)} color={Color.black} />
              </TouchableOpacity>

              <Text style={styles.headerTitle}>
                {options.title ?? "App"}
              </Text>

              <TouchableOpacity onPress={() => console.log("Right pressed")}>
                <Ionicons name="person-circle" size={RFValue(24)} color={Color.black} />
              </TouchableOpacity>
            </View>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size, focused }: any) => (
              focused ? <MaterialIcons name="home-filled" size={size} color={color} />
                : <Octicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="schedule"
          options={{
            headerShown: false,
            title: "Schedule",
            tabBarIcon: ({ color, size, focused }: any) => (
              focused ? <Ionicons name="calendar-sharp" size={size} color={color} />
                : <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="offers"
          options={{
            title: "Offers",
            tabBarIcon: ({ color, size, focused }: any) => (
              focused ? <MaterialIcons name="campaign" size={size} color={color} />
                : <MaterialCommunityIcons name="bullhorn-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="feed"
          options={{
            title: "Feed",
            tabBarIcon: ({ color, size, focused }: any) => (
              focused ? <Ionicons name="newspaper-sharp" size={size} color={color} />
                : <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            tabBarIcon: ({ color, size, focused }: any) => (
              focused ? <Ionicons name="chatbubble-ellipses" size={size} color={color} />
                : <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
  },
  header: {
    height: RFValue(50),
    backgroundColor: Color.white,
    paddingHorizontal: RFValue(14),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: Color.grayLight,
  },
  headerTitle: {
    fontSize: RFValue(14),
    fontWeight: "bold",
    color: Color.black,
  },
});

export default withAuthProtection(TabsLayout)
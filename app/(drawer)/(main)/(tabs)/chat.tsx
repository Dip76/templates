import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";
import React from "react";

const chatData = [
  {
    id: "elevate-events",
    name: "Elevate Events",
    logo: require("../../../../assets/elevate-logo.png"),
    lastMessage: "Hello! Welcome to Elevate Events.",
    time: "10:30 AM",
  },
];

export default function ChatListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/chat/${item.name}`} asChild>
            <TouchableOpacity style={styles.chatItem}>
              <Image source={item.logo} style={styles.chatLogo} />
              <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatMessage} numberOfLines={1}>
                  {item.lastMessage}
                </Text>
              </View>
              <Text style={styles.chatTime}>{item.time}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  chatLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  chatMessage: {
    fontSize: 14,
    color: "#666",
  },
  chatTime: {
    fontSize: 12,
    color: "#666",
  },
});
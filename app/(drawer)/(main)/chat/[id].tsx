import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function ChatDetailScreen() {
  const { id } = useLocalSearchParams();
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    if (id) {
      navigation.setOptions({
        title: `Chat of ${id}`,
      });
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <StatusBar style="dark" translucent={false} />
        <View style={styles.header}>
          <Image
            source={require("../../../../assets/elevate-logo.png")}
            style={styles.companyLogo}
          />
          <Text style={styles.companyName}>Elevate Events</Text>
        </View>

        <View style={styles.chatContainer}>
          <View style={styles.patternBackground}>
            <TouchableOpacity style={styles.loadEarlierButton}>
              <Text style={styles.loadEarlierText}>Load earlier messages</Text>
            </TouchableOpacity>

            {/* Chat messages would go here */}
            <View style={{ flex: 1 }} />

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type a message..."
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  companyName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  chatContainer: {
    flex: 1,
  },
  patternBackground: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
    justifyContent: "space-between",
  },
  loadEarlierButton: {
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 12,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 16,
  },
  loadEarlierText: {
    color: "#fff",
    fontWeight: "500",
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
});
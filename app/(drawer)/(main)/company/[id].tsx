import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";


export default function CompanyScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/elevate-logo.png")}
          style={styles.companyLogo}
        />
        <Text style={styles.companyName}>Elevate Events</Text>
      </View>

      <View style={styles.coverImageContainer}>
        <Image
          source={require("../../../../assets/company-cover.png")}
          style={styles.coverImage}
        />
        <View style={styles.logoOverlay}>
          <Image
            source={require("../../../../assets/elevate-logo.png")}
            style={styles.overlayLogo}
          />
        </View>
      </View>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutTitle}>About us</Text>
        <Text style={styles.aboutText}>
          Elevate Event Staff specializes in curating luxury Event Staff across the United States.
          Elevate Event Staff curates moments of sophistication, elevating each occasion to an
          unforgettable pinnacle of luxury and excellence.
        </Text>
        <Text style={styles.tagline}>Elevate Every Experience!</Text>

        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-instagram" size={24} color="#E1306C" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="globe-outline" size={24} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-linkedin" size={24} color="#0077B5" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>My info</Text>

        <TouchableOpacity style={styles.infoItem}>
          <View style={styles.infoIconContainer}>
            <Ionicons name="person" size={24} color="#6366F1" />
          </View>
          <Text style={styles.infoText}>Update my info</Text>
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.infoItem}>
          <View style={styles.infoIconContainer}>
            <Ionicons name="images" size={24} color="#6366F1" />
          </View>
          <Text style={styles.infoText}>My photo gallery</Text>
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  coverImageContainer: {
    position: "relative",
    height: 200,
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  logoOverlay: {
    position: "absolute",
    bottom: -50,
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },
  overlayLogo: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  aboutCard: {
    marginTop: 60,
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
  },
  tagline: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  socialLinks: {
    flexDirection: "row",
    gap: 16,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  infoSection: {
    padding: 24,
    marginTop: 16,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  infoText: {
    fontSize: 16,
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
  },
});
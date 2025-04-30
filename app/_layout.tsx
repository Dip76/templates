import { useAuthStore } from "@/store/authStore";
import { Color } from "@/theme/Colors";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Slot, Stack, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn, checkAuth } = useAuthStore();
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(true); // null = checking
  const router = useRouter();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       // Replace with actual auth logic (e.g. AsyncStorage, Zustand, Supabase, Firebase, etc.)
  //       // Example:
  //       // const token = await AsyncStorage.getItem("token");
  //       const loggedIn = false; // simulate check
  //       setIsLoggedIn(loggedIn);
  //     } catch (error) {
  //       console.error("Auth check failed:", error);
  //       setIsLoggedIn(false);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   // checkAuth();
  // }, []);

  useEffect(() => {
    const initialize = async () => {
      await checkAuth();
      setIsLoading(false);
    };

    initialize();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    if (isLoggedIn) {
      router.replace('/(drawer)/(main)/(tabs)');
    } else {
      router.replace("/(auth)/login");
    }
  }, [isLoading, isLoggedIn]);

  // Optional: show splash or loading indicator during auth check
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ActionSheetProvider>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)/login" />
            <Stack.Screen name='(auth)/verification' />
            <Stack.Screen name="(drawer)" />
          </Stack>
        </BottomSheetModalProvider>
      </ActionSheetProvider>
    </GestureHandlerRootView>
  );
}

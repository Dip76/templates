
// app/(drawer)/(main)/_layout.tsx
import { Stack } from "expo-router";
import { Color } from "@/theme/Colors";
import React from "react";

export default function MainLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, headerTintColor: Color.black, headerBackButtonDisplayMode: 'minimal', headerTitleAlign: 'center' }}>
            <Stack.Screen name="income" options={{ headerShown: true, title: 'Income' }} />
            <Stack.Screen name="notification" options={{ headerShown: true, title: 'Notifications' }} />
            <Stack.Screen name="join-company" options={{ headerShown: true, title: 'Join a company' }} />
            <Stack.Screen name="settings" options={{ headerShown: true, title: 'Settings' }} />
            <Stack.Screen name="myrequest" options={{ headerShown: true, title: 'My Request' }} />
            <Stack.Screen name="newrequest" options={{ headerShown: true, title: 'New Request' }} />
            <Stack.Screen name="chat/[id]" options={{ headerShown: true, title: '' }} />
            <Stack.Screen name="profile" options={{ headerShown: true, title: 'Profile' }} />
            <Stack.Screen name="eventInfo" options={{ headerShown: true, title: 'Event Info' }} />
            <Stack.Screen name="editprofile" options={{ headerShown: true, title: 'Edit Profile' }} />
            <Stack.Screen name="updateinfo" options={{ headerShown: true, title: 'Update Information' }} />
        </Stack>
    );
}
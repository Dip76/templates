// app/(drawer)/_layout.tsx
import { Drawer } from "expo-router/drawer";
import SidebarContent from "@/components/SidebarContent";
import React from "react";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "60%",
        },
      }}
      drawerContent={(props: any) => <SidebarContent {...props} />}
    >
      {/* Only one route in the drawer that contains everything else */}
      <Drawer.Screen name="(main)" options={{ headerShown: false }} />
    </Drawer>
  );
}
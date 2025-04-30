import { Color } from "@/theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Text } from "react-native";
import { CustomTopTabBarStyles } from "@/theme/styles";
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

interface CustomTopTabBarProps extends MaterialTopTabBarProps {
    showBackIcon?: boolean;
}
const CustomTopTabBar: React.FC<CustomTopTabBarProps> = ({ state, descriptors, navigation, showBackIcon }) => {
    const nav = useNavigation<any>();

    return (
        <View style={CustomTopTabBarStyles.container}>
            {/* Menu icon for navigation or back button */}
            <View style={CustomTopTabBarStyles.menuIcon}>
                {showBackIcon ? (
                    <TouchableOpacity onPress={() => nav.goBack()}>
                        <Ionicons name={Platform.OS === "ios" ? "chevron-back-sharp" : "arrow-back"} size={RFValue(20)} color={Color.black} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => nav.openDrawer()}>
                        <Ionicons name="menu" size={RFValue(24)} color={Color.black} />
                    </TouchableOpacity>
                )}
            </View>

            {/* Tabs pill style container */}
            <View style={CustomTopTabBarStyles.tabContainer}>
                {state?.routes?.map((route: any, index: number) => {
                    const label = descriptors[route?.key]?.options?.title ?? route?.name;
                    const isFocused = state?.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route?.key,
                        } as { type: "tabPress"; target?: string; canPreventDefault: true; data?: undefined });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route?.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={route?.key}
                            onPress={onPress}
                            style={[CustomTopTabBarStyles.tabWrapper, { backgroundColor: isFocused ? Color.primary : "transparent" }]}
                        >
                            <Text style={[CustomTopTabBarStyles.tabText, { color: isFocused ? Color.white : Color.primary }]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

export default CustomTopTabBar;
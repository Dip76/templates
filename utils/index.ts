import { Alert, Platform } from "react-native";

{/* Validate Phone Number */ }

export const validatePhoneNumber = (phoneNumber: string) => {
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(cleanedNumber)) {
        Alert.alert('Elevate', 'Please enter a valid 10-digit phone number');
        return false;
    }
    return true;
};

// This utility function is created for passing platform specific values in some UI glitches
// User only when there is no way to solve the issue |||||||||||||||||||||||||||||||||||||||
export const platformValue = (android: any, ios: any, windows: any) => {
    if (Platform.OS === 'android') {
        return android
    } else if (Platform.OS === 'ios') {
        return ios
    } else {
        return windows
    }
}




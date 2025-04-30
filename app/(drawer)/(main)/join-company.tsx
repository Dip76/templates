import { InputStyles, JoinCompanyStyles } from "@/theme/styles";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, TextInput, Text } from "react-native";

const JoinCompanyScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyCode, setCompanyCode] = useState('');
    const router = useRouter();
    return (
        <SafeAreaView style={JoinCompanyStyles.container}>
            <StatusBar style='dark' translucent={false} />
            <View style={JoinCompanyStyles.form}>
                <View style={JoinCompanyStyles.inputContainer}>
                    <TextInput
                        style={InputStyles.input}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                </View>

                <View style={JoinCompanyStyles.inputContainer}>
                    <TextInput
                        style={InputStyles.input}
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </View>

                <View style={JoinCompanyStyles.inputContainer}>
                    <TextInput
                        style={InputStyles.input}
                        placeholder="Company code"
                        value={companyCode}
                        onChangeText={setCompanyCode}
                    />
                </View>
            </View>

            <TouchableOpacity
                style={JoinCompanyStyles.nextButton}
            // onPress={() => router.navigate('Notifications')}
            >
                <Text style={JoinCompanyStyles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default JoinCompanyScreen;
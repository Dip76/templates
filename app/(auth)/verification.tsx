import { SafeAreaView, Keyboard, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { OtpInput } from 'react-native-otp-entry';
import { PrimaryButtonStyles, VerificationScreenStyles } from '@/theme/styles';
import { Color } from '@/theme/Colors';

const VerificationScreen = () => {
    const { phoneNumber } = useLocalSearchParams();
    const [verificationCode, setVerificationCode] = useState('')
    const [timeLeft, setTimeLeft] = useState(30);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timeLeft > 0) {
            timerRef.current = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [timeLeft]);

    {/* Activate Click */ }
    const handleActivateClick = () => {
        Keyboard.dismiss()
        router.replace('/(drawer)/(tabs)')
    };


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={VerificationScreenStyles.screenContainer}>
                <View style={VerificationScreenStyles.contentWrapper}>
                    <Text style={VerificationScreenStyles.titleText}> Verification </Text>
                    <Text style={VerificationScreenStyles.subtitleText}> We have send a text message with the code </Text>
                    <Text style={VerificationScreenStyles.subtitleText}>{phoneNumber}</Text>

                    {/* OTP Input Field */}
                    <OtpInput numberOfDigits={5}
                        type="numeric"
                        onTextChange={setVerificationCode}
                        theme={{
                            containerStyle: VerificationScreenStyles.OtpInputContainer,
                            pinCodeContainerStyle: VerificationScreenStyles.pinContainer,
                            focusedPinCodeContainerStyle: VerificationScreenStyles.focusPinContainer,
                            focusStickStyle: VerificationScreenStyles.focusPin
                        }}
                    />

                    {/* OTP Retry*/}
                    {timeLeft > 0
                        ?
                        <Text style={VerificationScreenStyles.messageText}>
                            {`You should receive a code within ${timeLeft} seconds`}
                        </Text>
                        :
                        <TouchableOpacity>
                            <Text style={VerificationScreenStyles.tryAgainButtonText}>Please try again</Text>
                        </TouchableOpacity>
                    }

                    {/* Button Activate */}
                    <TouchableOpacity
                        disabled={!verificationCode || verificationCode.length < 5}
                        style={[
                            PrimaryButtonStyles.buttonContainer,
                            { backgroundColor: !verificationCode || verificationCode.length < 5 ? Color.secondary : Color.primary },
                        ]}
                        activeOpacity={0.9}
                        onPress={handleActivateClick}>
                        <Text style={PrimaryButtonStyles.buttonText}>ACTIVATE</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default VerificationScreen

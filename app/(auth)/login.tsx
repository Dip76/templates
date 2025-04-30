import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import React from "react";
import { InputStyles, LoginScreenStyles, PrimaryButtonStyles } from "@/theme/styles";
import ElevateLogo from '../../assets/svgs/ElevateLogo.svg'
import { Color } from "@/theme/Colors";
import { CountryPicker } from "react-native-country-codes-picker";
import { validatePhoneNumber } from "@/utils";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [searchValue, setSearchValue] = useState('');

  {/* Phone Numbre change*/ }
  const handlePhoneChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };

  {/* Next Click */ }
  const handleNextClick = () => {
    if (validatePhoneNumber(phoneNumber)) {
      const phoneNo = `${countryCode} ${phoneNumber}`
      router.push('/(auth)/verification')
    }
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView style={LoginScreenStyles.screenContainer}>
        <View style={LoginScreenStyles.contentWrapper}>
          {/* Logo svg */}
          <ElevateLogo />
          <Text style={LoginScreenStyles.titleText}>Welcome!</Text>
          <Text style={LoginScreenStyles.subtitleText}>
            Please enter your phone number
          </Text>

          <View style={LoginScreenStyles.phoneInputContainer}>
            {/* Country Code */}
            <TouchableOpacity
              style={LoginScreenStyles.countryCodeButton}
              activeOpacity={0.7}
              onPress={() => setShow(true)}>
              <Text style={LoginScreenStyles.countryCodeText}>{countryCode}</Text>
            </TouchableOpacity>

            {/* Phone Number Input */}
            <TextInput
              style={[InputStyles.input, { flex: 1 }]}
              placeholder="Phone number"
              keyboardType="phone-pad"
              maxLength={10}
              value={phoneNumber}
              onChangeText={handlePhoneChange}
              inputMode="numeric"
            />
          </View>

          {/* Next Button */}
          <TouchableOpacity
            disabled={!phoneNumber}
            style={[
              PrimaryButtonStyles.buttonContainer,
              { backgroundColor: phoneNumber ? Color.primary : Color.secondary, },
            ]}
            activeOpacity={0.9}
            onPress={handleNextClick}>
            <Text style={PrimaryButtonStyles.buttonText}>NEXT</Text>
          </TouchableOpacity>

          <CountryPicker
            show={show}
            lang='en'
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
            style={{ modal: { height: Dimensions.get('window').height * 0.7 } }}
            onBackdropPress={() => setShow(false)}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}


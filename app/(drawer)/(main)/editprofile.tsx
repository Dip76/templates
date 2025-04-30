import AvatarImage from '@/components/AvatarImage';
import { Color } from '@/theme/Colors';
import { EditProfileScreenStyles } from '@/theme/styles';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as ImagePicker from 'expo-image-picker';
import ImagePickerUtils from '@/utils/ImagePickerUtils';
import { PhotoOption, usePhotoActionSheetHandler } from '@/utils/usePhotoActionSheetHandler';

const EditProfileScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [image, setImage] = useState<string | null>(null);

    const handleSave = () => {
        // Handle save logic here
        console.log('Saving changes:', { firstName, lastName });
    };
    const handlePickFromGallery = async () => {
        const result = await ImagePickerUtils.pickFromGallery()
        console.log('Pickd from gallery:', result.uri);
        setImage(result.uri);
    };

    const handlePickFromCamera = async () => {
        const result = await ImagePickerUtils.pickFromCamera();
        console.log('Captured from camera:', result.uri);
        setImage(result.uri);
    };
    const photoActionSheetHandler = usePhotoActionSheetHandler();

    const handleOptionSelect = (option: PhotoOption) => {
        switch (option) {
            case PhotoOption.camera:
                handlePickFromCamera();
                break;
            case PhotoOption.gallery:
                handlePickFromGallery();
                break;
            case PhotoOption.cancel:
                console.log("User selected: Cancel");
                break;
        }
    }

    return (
        <SafeAreaView style={EditProfileScreenStyles.container}>
            <StatusBar barStyle="dark-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={EditProfileScreenStyles.keyboardAvoidingContainer}
            >
                <ScrollView
                    contentContainerStyle={EditProfileScreenStyles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Profile Picture */}
                    <TouchableOpacity style={EditProfileScreenStyles.profilePictureContainer} activeOpacity={0.7} onPress={() => photoActionSheetHandler({ onOptionSelect: handleOptionSelect, })}>
                        <AvatarImage iconSize={RFValue(90)} imageUrl={image ?? ''} />
                    </TouchableOpacity>

                    {/* Form Fields */}
                    <View style={EditProfileScreenStyles.formContainer}>
                        <Text style={EditProfileScreenStyles.label}>First Name</Text>
                        <TextInput
                            style={EditProfileScreenStyles.input}
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder="First Name"
                        />

                        <Text style={EditProfileScreenStyles.label}>Last Name</Text>
                        <TextInput
                            style={EditProfileScreenStyles.input}
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder="Last Name"
                        />
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
            {/* Save Button */}
            <View style={EditProfileScreenStyles.buttonContainer}>
                <TouchableOpacity style={EditProfileScreenStyles.saveButton} onPress={handleSave}>
                    <Text style={EditProfileScreenStyles.saveButtonText}>SAVE CHANGES</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};

export default EditProfileScreen

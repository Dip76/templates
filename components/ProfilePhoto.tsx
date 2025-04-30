import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProfilePhotoStyles } from '@/theme/styles'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Color } from '@/theme/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { PhotoOption, usePhotoActionSheetHandler } from '@/utils/usePhotoActionSheetHandler';
import ImagePickerUtils from '@/utils/ImagePickerUtils';

const ProfilePhoto = () => {
    const handlePickFromGallery = async () => {
        const result = await ImagePickerUtils.pickFromGallery()
        console.log('Pickd from gallery:', result.uri);
    };

    const handlePickFromCamera = async () => {
        const result = await ImagePickerUtils.pickFromCamera();
        console.log('Captured from camera:', result.uri);

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
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ProfilePhotoStyles.container}>
                <Text style={ProfilePhotoStyles.title}>Let’s upload your profile photo</Text>
                <MaterialCommunityIcons name="image-plus" size={RFValue(40)} color={Color.primary} />
                <TouchableOpacity style={ProfilePhotoStyles.buttonContainer}
                    onPress={() => photoActionSheetHandler({ onOptionSelect: handleOptionSelect, })}>
                    <Text style={ProfilePhotoStyles.buttonText}>UPLOAD</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProfilePhoto
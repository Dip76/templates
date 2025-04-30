import React, { useCallback, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StatusBar, TouchableWithoutFeedback, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '@/theme/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SettingScreenStyles } from '@/theme/styles';
import BottomSheetSingleSelectionList from '@/components/BottomSheetSingleSelectionList';


const SettingsScreen = () => {
    const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('English (US)');
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = React.useMemo(() => ['85%'], []);

    const languages: SelectionOption[] = [
        { id: 'en_US', label: 'English (US)', value: 'English (US)' },
        { id: 'en_GB', label: 'English (UK)', value: 'English (UK)' },
        { id: 'es', label: 'Spanish', value: 'Spanish' },
        { id: 'fr', label: 'French', value: 'French' },
        { id: 'de', label: 'German', value: 'German' },
        { id: 'it', label: 'Italian', value: 'Italian' },
        { id: 'pt', label: 'Portuguese', value: 'Portuguese' },
        { id: 'zh_CN', label: 'Chinese (Simplified)', value: 'Chinese (Simplified)' },
        { id: 'zh_TW', label: 'Chinese (Traditional)', value: 'Chinese (Traditional)' },
        { id: 'ja', label: 'Japanese', value: 'Japanese' },
        { id: 'ko', label: 'Korean', value: 'Korean' },
        { id: 'ru', label: 'Russian', value: 'Russian' },
        { id: 'hi', label: 'Hindi', value: 'Hindi' },
        { id: 'ar', label: 'Arabic', value: 'Arabic' },
        { id: 'tr', label: 'Turkish', value: 'Turkish' },
        { id: 'nl', label: 'Dutch', value: 'Dutch' },
        { id: 'sv', label: 'Swedish', value: 'Swedish' },
        { id: 'pl', label: 'Polish', value: 'Polish' },
        { id: 'th', label: 'Thai', value: 'Thai' },
    ];

    {/* handle Email Notification */ }
    const toggleEmailNotifications = () => setEmailNotifications(prev => !prev);

    {/* Handle Language Selection  */ }
    const handleLanguageSelect = (option: SelectionOption) => {
        setSelectedLanguage(option.value);
        bottomSheetModalRef.current?.close();
    };
    {/* Show Language Sheet */ }
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <View style={SettingScreenStyles.container}>
            <StatusBar barStyle="dark-content" translucent={false} />

            {/* Language Section */}
            <View style={SettingScreenStyles.section}>
                <Text style={SettingScreenStyles.sectionTitle}>Language</Text>
                <TouchableOpacity style={SettingScreenStyles.dropdown} onPress={handlePresentModalPress}>
                    <Text style={SettingScreenStyles.dropdownText}>
                        {languages.find(lang => lang.value === selectedLanguage)?.value || 'English (US)'}
                    </Text>
                    <Ionicons name="chevron-down" size={RFValue(20)} color={Color.drawerIcon} />
                </TouchableOpacity>
            </View>

            {/* Email Notifications Section */}
            <View style={SettingScreenStyles.section}>
                <View style={SettingScreenStyles.toggleRow}>
                    <Text style={SettingScreenStyles.sectionTitle}>Email notifications</Text>
                    <Switch
                        value={emailNotifications}
                        onValueChange={toggleEmailNotifications}
                        trackColor={{ false: Color.grayLight, true: Color.green }}
                        thumbColor={Color.white}
                    />
                </View>
            </View>

            {/* Bottom Sheet Modal */}
            <BottomSheetModal
                ref={bottomSheetModalRef}
                snapPoints={snapPoints}
                backgroundStyle={{ backgroundColor: Color.white }}
                handleIndicatorStyle={{ backgroundColor: Color.gray }}
                containerStyle={{ backgroundColor: Color.semiTransparent }}
                backdropComponent={({ style }) => (
                    <TouchableWithoutFeedback style={[style]} onPress={() => bottomSheetModalRef.current?.close()}>
                        <View style={[style]} />
                    </TouchableWithoutFeedback>
                )}
                enableDynamicSizing={false}
            >
                <BottomSheetSingleSelectionList
                    options={languages}
                    selectedValue={selectedLanguage}
                    onSelect={handleLanguageSelect} />
            </BottomSheetModal>
        </View>
    );
}

export default SettingsScreen;
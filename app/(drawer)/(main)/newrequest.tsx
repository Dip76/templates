import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StatusBar, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, Platform, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { NewRequestScreenStyles, OffersScreenStyles, SettingScreenStyles } from '@/theme/styles';
import { BottomSheetFlatList, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { Color } from '@/theme/Colors';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import CustomCalenderList from '@/components/CustomCalenderList';
import { router } from 'expo-router';
import BottomSheetSingleSelectionList from '@/components/BottomSheetSingleSelectionList';

const requestTypeOptions: SelectionOption[] = [
    { id: 'RM', label: 'Remote work', value: 'Remote work' },
    { id: 'DF', label: 'Day off', value: 'Day off' },
    { id: 'SL', label: 'Sick leave', value: 'Sick leave' },
    { id: 'OT', label: 'Other', value: 'Other' },
];

enum SheetType {
    REQUEST_TYPE = 'requestType',
    DATE_PICKER = 'datePicker',
    CALENDAR_LIST = 'calendarList',
}

const NewRequestScreen = () => {
    // Bottom Sheet Modal Reference
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);


    // State Variables
    const [requestType, setRequestType] = useState('Day off');
    const [isOneDay, setIsOneDay] = useState(true);
    const [comment, setComment] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [sheetType, setSheetType] = useState<SheetType | null>(null);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [dateRange, setDateRange] = useState({
        startDate: '',
        endDate: ''
    });

    // Open Bottom Sheet with a specific type
    const openBottomSheet = (type: SheetType) => {
        setSheetType(type);
        bottomSheetModalRef.current?.present();
    };

    // Close Bottom Sheet
    const closeBottomSheet = () => {
        setSheetType(null);
        bottomSheetModalRef.current?.close();
    };

    // Handle Request Type Selection
    const handleRequestTypeChange = (option: SelectionOption) => {
        closeBottomSheet();
        setRequestType(option.value);
    };

    // Handle Date Change from DateTimePicker
    const handleDateChange = (_event: DateTimePickerEvent, date?: Date) => {
        if (date) {
            setSelectedDate(date);
            Platform.OS === 'android' && setIsDatePickerVisible(false);
        }
    };

    // Render date picker
    const datePicker = () => (
        <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            themeVariant="light"
        />
    );

    // Render Bottom Sheet Content based on type
    const renderBottomSheetContent = (type: SheetType | null) => {
        switch (type) {
            case SheetType.REQUEST_TYPE:
                return (
                    <BottomSheetSingleSelectionList
                        options={requestTypeOptions}
                        selectedValue={requestType}
                        onSelect={handleRequestTypeChange} />
                );
            case SheetType.DATE_PICKER:
                return datePicker();
            case SheetType.CALENDAR_LIST:
                return (
                    <CustomCalenderList selectedDate={dateRange}
                        onClose={() => {
                            closeBottomSheet();
                        }}
                        onConfirm={(dateRange) => {
                            setDateRange(dateRange);
                            closeBottomSheet();
                        }} />
                )
            default:
                return null;
        }
    };

    // Handle submit with basic validation
    const handleSubmit = () => {
        if (!comment.trim()) {
            alert('Comment is required.');
            return;
        }
        alert('Request submitted!');
    };

    /// Handle dynamic snap points for Bottom Sheet
    const handleSnapPoint = () => {
        if (sheetType === SheetType.DATE_PICKER) {
            return ['35%'];
        } else if (sheetType === SheetType.CALENDAR_LIST) {
            return ['85%'];
        }
        return [];
    }

    // Handle dynamic sizing for Bottom Sheet
    const handleSheetDynamicSizing = () => {
        if ((sheetType === SheetType.DATE_PICKER) || (sheetType === SheetType.CALENDAR_LIST)) {
            return false;
        }
        return true;
    }

    return (
        <SafeAreaView style={NewRequestScreenStyles.container}>
            <StatusBar barStyle="dark-content" />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
                <ScrollView automaticallyAdjustKeyboardInsets contentContainerStyle={{ paddingBottom: RFValue(20) }}>
                    <View style={NewRequestScreenStyles.formContainer}>
                        {/* Request Type Selection */}
                        <Text style={NewRequestScreenStyles.sectionTitle}>Request Type</Text>
                        <TouchableOpacity style={NewRequestScreenStyles.dropdown}
                            onPress={() => openBottomSheet(SheetType.REQUEST_TYPE)}
                        >
                            <Text style={NewRequestScreenStyles.optionBadge}>{requestType}</Text>
                            <Ionicons name="chevron-down" size={RFValue(20)} color={Color.black} />
                        </TouchableOpacity>

                        {/* When? Segmented Control */}
                        <Text style={NewRequestScreenStyles.sectionTitle}>When?</Text>
                        <View style={NewRequestScreenStyles.segmentedControl}>

                            <TouchableOpacity style={[NewRequestScreenStyles.segmentButton, isOneDay && NewRequestScreenStyles.segmentActive]}
                                onPress={() => setIsOneDay(true)}>
                                <Text style={[NewRequestScreenStyles.segmentText, isOneDay && NewRequestScreenStyles.segmentActiveText]}>One Day</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[NewRequestScreenStyles.segmentButton, !isOneDay && NewRequestScreenStyles.segmentActive]}
                                onPress={() => setIsOneDay(false)} >
                                <Text style={[NewRequestScreenStyles.segmentText, !isOneDay && NewRequestScreenStyles.segmentActiveText]}>Multi days</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Date Selection */}
                        <Text style={NewRequestScreenStyles.sectionTitle}>Select Date</Text>
                        {
                            isOneDay ? (
                                // Single date selection using DateTimePicker
                                <TouchableOpacity
                                    style={NewRequestScreenStyles.dropdown}
                                    onPress={() => {
                                        // Show Date Picker in Bottom Sheet for iOS or directly for Android
                                        Platform.OS === 'ios'
                                            ? openBottomSheet(SheetType.DATE_PICKER)
                                            : setIsDatePickerVisible(true);
                                    }}
                                >
                                    <Ionicons name="calendar-outline" size={RFValue(20)} color={Color.black} />
                                    <Text style={NewRequestScreenStyles.dateText}>
                                        {selectedDate?.toLocaleDateString() || 'Select Date'}
                                    </Text>
                                    <Ionicons name="chevron-down" size={RFValue(20)} color={Color.black} />
                                </TouchableOpacity>
                            ) : (
                                // Multi-day selection using CalendarList
                                <View style={NewRequestScreenStyles.multyDateContainer}>
                                    <TouchableOpacity
                                        style={[NewRequestScreenStyles.dropdown, { flex: 1 }]}
                                        onPress={() => openBottomSheet(SheetType.CALENDAR_LIST)}
                                    >
                                        <Ionicons name="calendar-outline" size={RFValue(20)} color={Color.black} />
                                        <Text style={NewRequestScreenStyles.dateText}>
                                            {dateRange.startDate || 'Start Date'}
                                        </Text>
                                        <Ionicons name="chevron-down" size={RFValue(20)} color={Color.black} />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[NewRequestScreenStyles.dropdown, { flex: 1 }]}
                                        onPress={() => openBottomSheet(SheetType.CALENDAR_LIST)}
                                    >
                                        <Ionicons name="calendar-outline" size={RFValue(20)} color={Color.black} />
                                        <Text style={NewRequestScreenStyles.dateText}>
                                            {dateRange.endDate || 'End Date'}
                                        </Text>
                                        <Ionicons name="chevron-down" size={RFValue(20)} color={Color.black} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        {/* Comment Field */}
                        <Text style={NewRequestScreenStyles.sectionTitle}>Comment(*)</Text>
                        <TextInput
                            style={NewRequestScreenStyles.commentInput}
                            multiline
                            numberOfLines={4}
                            value={comment}
                            onChangeText={setComment}
                            placeholder="Type your comment here..."
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Action Buttons */}
            <View style={NewRequestScreenStyles.buttonContainer}>
                <TouchableOpacity style={NewRequestScreenStyles.sendButton} onPress={handleSubmit}>
                    <Text style={NewRequestScreenStyles.sendButtonText}>SEND FOR APPROVAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={NewRequestScreenStyles.cancelButton} onPress={() => {
                    Keyboard.dismiss()
                    router.dismiss()
                }}>
                    <Text style={NewRequestScreenStyles.cancelButtonText}>CANCEL</Text>
                </TouchableOpacity>
            </View>


            {/* Android Date Picker */}
            {isDatePickerVisible && datePicker()}

            {/* Bottom Sheet Modal */}
            <BottomSheetModal
                ref={bottomSheetModalRef}
                enableContentPanningGesture={false}
                snapPoints={handleSnapPoint()}
                backdropComponent={({ style }) => (
                    <TouchableWithoutFeedback onPress={closeBottomSheet}>
                        <View style={[style, { backgroundColor: Color.semiTransparent }]} />
                    </TouchableWithoutFeedback>
                )}
                handleIndicatorStyle={{ backgroundColor: Color.gray }}
                enableDynamicSizing={handleSheetDynamicSizing()}
            >
                <BottomSheetView style={[OffersScreenStyles.sheetwrapper, { alignItems: sheetType === SheetType.DATE_PICKER ? 'center' : undefined }]}>
                    {/* Bottom Sheet Content */}
                    {renderBottomSheetContent(sheetType)}
                </BottomSheetView>
            </BottomSheetModal>
        </SafeAreaView >
    );
};

export default NewRequestScreen;

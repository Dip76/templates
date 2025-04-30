import React, { useState, useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, Alert, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Color } from '@/theme/Colors';
import CustomInput from '@/components/CustomInput';
import UploadInput from '@/components/UploadInput';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { OffersScreenStyles, UpdateInfoScreenStyles } from '@/theme/styles';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import BottomSheetSingleSelectionList from '@/components/BottomSheetSingleSelectionList';

// Define types for our field definitions
type EmployeeFormInputFieldType = 'text' | 'date' | 'dropdown' | 'upload';
type EmployeeFormModalSheetType = 'date' | 'gender' | 'accountType' | 'barKit' | null;


interface EmployeeFormField {
    id: keyof EmployeeFormData;
    label: string;
    type: EmployeeFormInputFieldType;
    placeholder?: string;
    required: boolean;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

// Form data interface
interface EmployeeFormData {
    birthDate: string;
    gender: string;
    height: string;
    shirtSize: string;
    pantSize: string;
    jacketSize: string;
    shoeSize: string;
    hobbies: string;
    offerLetter: string | null;
    directDepositForm: string | null;
    w9Form: string | null;
    foodHandlersCard: string | null;
    rbsCertification: string | null;
    harassmentCertification: string | null;
    mailingAddress: string;
    routingNumber: string;
    accountType: string;
    barKit: string;
    hiredBy: string;
    accountNumber: string;
    staffHandbook: string | null;
    teamMemberQuiz: string | null;
    instagram: string;
    confirmRouting: string;
    referral: string;
    languages: string;
}

// Sample image path for testing
const sampleImagePath = Platform.OS === 'ios'
    ? 'file:///Users/ordexmacmini2024/Library/Developer/CoreSimulator/Devices/E4B2DEF2-25D9-475B-800B-B8A936C16FF7/data/Containers/Data/Application/8D406EEF-7863-43C9-8361-10701A9AA4E0/Library/Caches/ExponentExperienceData/@anonymous/ELevate-6a29cd05-9212-487f-8cb3-adde18c90397/ImagePicker/E985EB84-EF97-40BA-B0C4-B7FA2EF86C33.jpg'
    : 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FELevate-6a29cd05-9212-487f-8cb3-adde18c90397/ImagePicker/d51d441a-5f33-4940-969a-58e9ef10bd84.jpeg';


// Define all employee form fields
const employeeFormFields: EmployeeFormField[] = [
    { id: 'birthDate', label: 'Birth Date', type: 'date', required: true },
    { id: 'gender', label: 'Gender', type: 'dropdown', required: true },
    { id: 'height', label: 'Height (Feet and inches)', type: 'text', placeholder: "Ex: 5'8", required: true },
    { id: 'shirtSize', label: 'Shirt Size - (XS/S/M/L/XL/XXL)', type: 'text', placeholder: 'Ex: M', required: true },
    { id: 'pantSize', label: 'Pant Size - (XS/S/M/L/XL/XXL)', type: 'text', placeholder: 'Ex: 32', required: true },
    { id: 'jacketSize', label: 'Jacket Size', type: 'text', placeholder: 'Ex: L', required: true },
    { id: 'shoeSize', label: 'Shoe Size', type: 'text', placeholder: 'Ex: 10', keyboardType: 'numeric', required: true },
    { id: 'hobbies', label: 'Hobbies & Special Skills', type: 'text', placeholder: 'Ex: Singing, Acting', required: true },
    { id: 'offerLetter', label: 'Offer Letter', type: 'upload', required: true },
    { id: 'directDepositForm', label: 'Direct Deposit Form', type: 'upload', required: true },
    { id: 'w9Form', label: 'W-9 Form', type: 'upload', required: true },
    { id: 'foodHandlersCard', label: 'Food Handlers Card', type: 'upload', required: false },
    { id: 'rbsCertification', label: 'RBS Certification', type: 'upload', required: false },
    { id: 'harassmentCertification', label: 'Sexual Harassment Certification', type: 'upload', required: false },
    { id: 'mailingAddress', label: 'Mailing Address', type: 'text', placeholder: 'Ex: 123 Street', required: true },
    { id: 'routingNumber', label: '9 Digit Routing Number (Electronic Transfers)', type: 'text', placeholder: 'Ex: 123456789', keyboardType: 'numeric', required: true },
    { id: 'accountType', label: 'Is your bank account a checking or savings?', type: 'dropdown', required: true },
    { id: 'barKit', label: 'Do you have a bar kit?', type: 'dropdown', required: true },
    { id: 'hiredBy', label: 'Hired By:', type: 'text', placeholder: 'Ex: John', required: true },
    { id: 'accountNumber', label: 'Account Number (Direct Deposit)', type: 'text', placeholder: 'Ex: 1234567890', keyboardType: 'numeric', required: true },
    { id: 'staffHandbook', label: 'Staff Handbook', type: 'upload', required: true },
    { id: 'teamMemberQuiz', label: 'Team Member Quiz Result', type: 'upload', required: true },
    { id: 'instagram', label: 'Instagram', type: 'text', placeholder: '@username', required: true },
    { id: 'confirmRouting', label: 'Please Confirm Routing Number', type: 'text', placeholder: 'Ex: 123456789', keyboardType: 'numeric', required: true },
    { id: 'referral', label: 'Who Referred You to Elevate?', type: 'text', placeholder: 'Ex: John', required: false },
    { id: 'languages', label: 'What languages do you speak fluently?', type: 'text', placeholder: 'Ex: English, Spanish', required: true },
];

// Dropdown selection options
const genderOptions: SelectionOption[] = [
    { id: 'male', label: 'Male', value: 'Male' },
    { id: 'female', label: 'Female', value: 'Female' },
    { id: 'other', label: 'Other', value: 'Other' },
    { id: 'prefer_not_to_say', label: 'Prefer not to say', value: 'Prefer not to say' },
];
const accountTypeOptions: SelectionOption[] = [
    { id: 'checking', label: 'Checking', value: 'Checking' },
    { id: 'savings', label: 'Savings', value: 'Savings' },
    { id: 'business', label: 'Business', value: 'Business' },
    { id: 'joint', label: 'Joint', value: 'Joint' },
    { id: 'other', label: 'Other', value: 'Other' },
];
const barKitOptions: SelectionOption[] = [
    { id: 'yes', label: 'Yes', value: 'Yes' },
    { id: 'no', label: 'No', value: 'No' },
    { id: 'not_a_bartender', label: 'Not a Bartender', value: 'Not a Bartender' },
];

// Initial form data
const initialEmployeeData: EmployeeFormData = {
    birthDate: '2025-01-01',
    gender: 'Male',
    height: '',
    shirtSize: '',
    pantSize: '',
    jacketSize: '',
    shoeSize: '',
    hobbies: '',
    offerLetter: sampleImagePath,
    directDepositForm: sampleImagePath,
    w9Form: sampleImagePath,
    foodHandlersCard: sampleImagePath,
    rbsCertification: sampleImagePath,
    harassmentCertification: sampleImagePath,
    mailingAddress: '',
    routingNumber: '',
    accountType: 'Checking',
    barKit: 'Not a Bartender',
    hiredBy: '',
    accountNumber: '',
    staffHandbook: sampleImagePath,
    teamMemberQuiz: sampleImagePath,
    instagram: '',
    confirmRouting: '',
    referral: '',
    languages: ''
};

const UpdateInfoScreen = () => {
    // Bottom Sheet Modal Reference
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    // Initial form data
    const [employeeData, setEmployeeData] = useState<EmployeeFormData>(initialEmployeeData);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [activeSheetType, setActiveSheetType] = useState<EmployeeFormModalSheetType>(null);
    // Update form field
    const updateFormField = useCallback((field: keyof EmployeeFormData, value: string | null) => {
        setEmployeeData(prev => ({ ...prev, [field]: value }));
    }, []);
    // Bottom sheet helpers
    const openBottomSheet = (type: EmployeeFormModalSheetType) => {
        setActiveSheetType(type);
        bottomSheetModalRef.current?.present();
    };
    const closeBottomSheet = useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, []);
    // Date picker handlers
    const showDatePicker = useCallback(() => {
        Platform.OS === 'ios' ? openBottomSheet('date') : setIsDatePickerVisible(true);
    }, []);

    const handleDateChange = (_event: DateTimePickerEvent, date?: Date) => {
        if (date) {
            updateFormField('birthDate', format(date, 'yyyy-MM-dd'));
            Platform.OS === 'android' && setIsDatePickerVisible(false);
        }
    };

    // Dropdown handler
    const showDropdownPicker = useCallback((field: keyof EmployeeFormData) => {
        openBottomSheet(field as EmployeeFormModalSheetType);
    }, []);

    // Get appropriate options for the dropdown type
    const getDropdownOptions = (type: EmployeeFormModalSheetType): SelectionOption[] => {
        switch (type) {
            case 'gender': return genderOptions;
            case 'accountType': return accountTypeOptions;
            case 'barKit': return barKitOptions;
            default: return [];
        }
    };

    // Handle dropdown selection
    const handleDropdownSelection = (type: EmployeeFormModalSheetType, option: SelectionOption) => {
        if (type) {
            updateFormField(type as keyof EmployeeFormData, option.value);
        }
    };

    // Get currently selected value for dropdown
    const getSelectedDropdownValue = (type: EmployeeFormModalSheetType): string => {
        switch (type) {
            case 'gender': return employeeData.gender;
            case 'accountType': return employeeData.accountType;
            case 'barKit': return employeeData.barKit;
            default: return '';
        }
    };

    // Form validation and submission
    const handleSaveEmployee = useCallback(() => {
        // Get all required fields
        const requiredFields = employeeFormFields.filter(field => field.required);
        // Check for empty required fields
        const missingFields = requiredFields.filter(field => !employeeData[field.id]);

        if (missingFields.length > 0) {
            Alert.alert('Missing Information', 'Please fill in all required fields');
            return;
        }

        // Validate routing numbers match
        if (employeeData.routingNumber !== employeeData.confirmRouting) {
            Alert.alert('Error', 'Routing numbers do not match');
            return;
        }

        Alert.alert('Success', 'Employee details updated successfully');
        // Here you would submit the form data to your API
        console.log('Employee data submitted:', employeeData);
    }, [employeeData, employeeFormFields]);

    // Handle dynamic snap points for Bottom Sheet
    const getBottomSheetSnapPoints = () => {
        if (activeSheetType === 'date') {
            return ['35%'];
        }
        return [];
    };

    // Handle dynamic sizing for Bottom Sheet
    const shouldUseBottomSheetDynamicSizing = () => {
        return activeSheetType !== 'date';
    };

    // Date picker component
    const renderDatePicker = () => (
        <DateTimePicker
            value={new Date(employeeData.birthDate) || new Date()}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            themeVariant="light"
        />
    );

    // Render Bottom Sheet Content 
    const renderBottomSheetContent = (type: EmployeeFormModalSheetType) => {
        switch (type) {
            case 'date':
                return renderDatePicker();
            case 'gender':
            case 'accountType':
            case 'barKit':
                return (
                    <BottomSheetSingleSelectionList
                        options={getDropdownOptions(type)}
                        selectedValue={getSelectedDropdownValue(type)}
                        onSelect={(option) => handleDropdownSelection(type, option)}
                    />
                );
            default:
                return null;
        }
    };

    // Render a form field based on its type
    const renderField = (field: EmployeeFormField) => {
        const { id, label, type, placeholder, required, keyboardType } = field;
        const value = employeeData[id];

        switch (type) {
            case 'date':
                return (
                    <React.Fragment key={id}>
                        <Text style={UpdateInfoScreenStyles.label}>{label} {required && '*'}</Text>
                        <TouchableOpacity style={UpdateInfoScreenStyles.dropdown} onPress={showDatePicker}>
                            <Ionicons name="calendar-outline" size={RFValue(20)} color={Color.black} />
                            <Text style={UpdateInfoScreenStyles.dateText}>{format(value ?? '', 'dd/MM/yyyy')}</Text>
                            <Ionicons name="chevron-down" size={RFValue(20)} color={Color.black} />
                        </TouchableOpacity>
                    </React.Fragment>
                );

            case 'dropdown':
                return (
                    <React.Fragment key={id}>
                        <Text style={UpdateInfoScreenStyles.label}>{label} {required && '*'}</Text>
                        <TouchableOpacity
                            style={UpdateInfoScreenStyles.dropdown}
                            onPress={() => showDropdownPicker(id)}
                        >
                            <Text style={UpdateInfoScreenStyles.optionBadge}>{value as string}</Text>
                            <Ionicons name="chevron-down" size={RFValue(20)} color={Color.black} />
                        </TouchableOpacity>
                    </React.Fragment>
                );

            case 'upload':
                return (
                    <UploadInput
                        key={id}
                        label={label}
                        required={required}
                        value={value as string | null}
                        onChange={(newValue: string | null) => updateFormField(id, newValue)}
                    />
                );

            default:
                return (
                    <CustomInput
                        key={id}
                        label={label}
                        placeholder={placeholder}
                        required={required}
                        value={value as string}
                        keyboardType={keyboardType}
                        onChangeText={(text: string) => updateFormField(id, text)}
                    />
                );
        }
    };

    return (
        <SafeAreaView style={UpdateInfoScreenStyles.container}>
            <KeyboardAvoidingView
                style={UpdateInfoScreenStyles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? RFValue(80) : 0}
            >
                <ScrollView
                    contentContainerStyle={UpdateInfoScreenStyles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={UpdateInfoScreenStyles.title}>Employee Details</Text>

                    {/* Render all fields in sequence */}
                    {employeeFormFields.map(field => renderField(field))}
                </ScrollView>

                <TouchableOpacity style={UpdateInfoScreenStyles.saveButton} onPress={handleSaveEmployee}>
                    <Text style={UpdateInfoScreenStyles.saveButtonText}>SAVE CHANGES</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            {/* Android Date Picker */}
            {isDatePickerVisible && renderDatePicker()}

            {/* Bottom Sheet Modal */}
            <BottomSheetModal
                ref={bottomSheetModalRef}
                enableContentPanningGesture={false}
                backdropComponent={({ style }) => (
                    <TouchableWithoutFeedback onPress={closeBottomSheet}>
                        <View style={[style, { backgroundColor: Color.semiTransparent }]} />
                    </TouchableWithoutFeedback>
                )}
                handleIndicatorStyle={{ backgroundColor: Color.gray }}
                enableDynamicSizing={shouldUseBottomSheetDynamicSizing()}
                snapPoints={getBottomSheetSnapPoints()}
            >
                <BottomSheetView style={[OffersScreenStyles.sheetwrapper, { alignItems: activeSheetType === 'date' ? 'center' : undefined }]}>
                    {/* Bottom Sheet Content */}
                    {renderBottomSheetContent(activeSheetType)}
                </BottomSheetView>
            </BottomSheetModal>
        </SafeAreaView>
    );
};

export default UpdateInfoScreen;
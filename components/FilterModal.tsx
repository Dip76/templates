import { FilterModalStyles } from "@/theme/styles";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

type FilterModalProps = {
    onDone: () => void
}

const FilterModal: React.FC<FilterModalProps> = ({ onDone }) => {
    // State variables for filter options
    const [offerStatus, setOfferStatus] = useState("All Offers");
    const [position, setPosition] = useState("");
    const [employer, setEmployer] = useState("");
    const availableStatus = ["All Offers", "Open offers", "Pending offers", "Rejected offers"];

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? RFValue(80) : 0}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={FilterModalStyles.container}>
                <View style={FilterModalStyles.header}>
                    <Text style={FilterModalStyles.title}>Filter</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={FilterModalStyles.section}>
                        <Text style={FilterModalStyles.sectionTitle}>Maximum Distance</Text>
                        <TouchableOpacity style={FilterModalStyles.findButton}>
                            <Text style={FilterModalStyles.findButtonText}>FIND NEARBY JOBS</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={FilterModalStyles.section}>
                        <Text style={FilterModalStyles.sectionTitle}>Offers status</Text>
                        {availableStatus.map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={FilterModalStyles.radioContainer}
                                onPress={() => setOfferStatus(option)}
                            >
                                <View style={FilterModalStyles.radio}>
                                    {offerStatus === option && (
                                        <View style={FilterModalStyles.radioSelected} />
                                    )}
                                </View>
                                <Text style={FilterModalStyles.radioText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={FilterModalStyles.section}>
                        <View style={FilterModalStyles.inputContainer}>
                            <TextInput
                                style={FilterModalStyles.input}
                                value={position}
                                onChangeText={setPosition}
                                placeholder="Position"
                            />
                            <TouchableOpacity
                                style={FilterModalStyles.clearButton}
                                onPress={() => setPosition("")}
                            >
                                <Text style={FilterModalStyles.clearButtonText}>CLEAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={FilterModalStyles.section}>
                        <View style={FilterModalStyles.inputContainer}>
                            <TextInput
                                style={FilterModalStyles.input}
                                value={employer}
                                onChangeText={setEmployer}
                                placeholder="Employer"
                            />
                            <TouchableOpacity
                                style={FilterModalStyles.clearButton}
                                onPress={() => setEmployer("")}
                            >
                                <Text style={FilterModalStyles.clearButtonText}>CLEAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={FilterModalStyles.doneButton} onPress={onDone}>
                        <Text style={FilterModalStyles.doneButtonText}>DONE</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default FilterModal;
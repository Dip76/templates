import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import NoRequest from '../../../assets/svgs/NoRequest.svg';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';
import { Color } from '@/theme/Colors';
import { MyRequestsScreenStyles } from '@/theme/styles';
import { router } from 'expo-router';


const MyRequestsScreen = () => {
    // Handle the FAB press action
    const handleFabPress = () => {
        router.push('/newrequest');
    }

    return (
        <SafeAreaView style={MyRequestsScreenStyles.container}>
            <StatusBar barStyle="dark-content" />
            {/* Empty State */}
            <View style={MyRequestsScreenStyles.emptyContainer}>
                <NoRequest />
                <Text style={MyRequestsScreenStyles.emptyText}>No Requests</Text>
            </View>

            {/* Overlay Container for FAB */}
            <TouchableOpacity onPress={handleFabPress} style={MyRequestsScreenStyles.overlayContainer}>
                <AntDesign name="pluscircle" size={RFValue(50)} color={Color.primary} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default MyRequestsScreen;
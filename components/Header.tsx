import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { HeaderStyles } from '@/theme/styles';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from 'expo-router';
import { RFValue } from 'react-native-responsive-fontsize';
import AvatarImage from './AvatarImage';
import { Color } from '@/theme/Colors';

const Header = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={HeaderStyles.header}>
            <TouchableOpacity
                style={HeaderStyles.menuButton}
                onPress={() => {
                    navigation.openDrawer();
                }}
            >
                <Ionicons name="menu" size={RFValue(24)} color="white" />
            </TouchableOpacity>
            <View style={HeaderStyles.userInfo}>
                {/* <View style={HeaderStyles.avatarContainer}> */}
                    {/* <Image
                        source={require("../assets/avatar-placeholder.png")}
                        style={HeaderStyles.avatar}
                    /> */}
                    <AvatarImage iconSize={RFValue(20)} iconColor={Color.white} iconName='person'/>
                {/* </View> */}
                <Text style={HeaderStyles.greeting}>Hi Jenis</Text>
            </View>
            <TouchableOpacity
                style={HeaderStyles.notificationButton}
                onPress={() => {
                    router.push("/notification");
                }}
            >
                <SimpleLineIcons name="bell" size={RFValue(20)} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Header
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import EventBackground from '../assets/svgs/EventBackground.svg';
import { Color } from '@/theme/Colors';
import { EmployersStyles } from '@/theme/styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { router } from 'expo-router';

const Employers = () => {
  return (
    <TouchableOpacity style={EmployersStyles.card} onPress={() => router.push('/eventInfo')}>
      <View style={EmployersStyles.imageWrapper}>
        <EventBackground width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
      </View>

      <View style={EmployersStyles.bottomRow}>
        <Text style={EmployersStyles.title}>Elevate Events</Text>
        <MaterialIcons name="chevron-right" size={RFValue(20)} color={Color.black} />
      </View>
    </TouchableOpacity>
  );
};
export default Employers;

// NoOffersCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NoOffer from '../assets/svgs/NoOffer.svg';
import { NoOffersCardStyles } from '@/theme/styles';
import { router } from 'expo-router';

const NoOffersCard = () => {
  return (
    <View style={NoOffersCardStyles.container}>
      <View style={NoOffersCardStyles.contentContainer}>
        <View style={NoOffersCardStyles.textContainer}>
          <Text style={NoOffersCardStyles.title}>NO NEW</Text>
          <Text style={NoOffersCardStyles.subTitle}>OFFERS</Text>
          <TouchableOpacity style={NoOffersCardStyles.button} onPress={() => router.push('/(drawer)/(main)/(tabs)/offers')}>
            <Text style={NoOffersCardStyles.buttonText}>SHOW</Text>
          </TouchableOpacity>
        </View>

        <View style={NoOffersCardStyles.imageContainer}>
          <NoOffer width={150} height={150} />
        </View>
      </View>
    </View>
  );
};



export default NoOffersCard;

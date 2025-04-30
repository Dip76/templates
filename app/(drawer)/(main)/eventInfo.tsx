import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { RFValue } from 'react-native-responsive-fontsize';
import { Color } from '@/theme/Colors';
import InstagramIcon from '../../../assets/svgs/instagramIcon.svg'
import { EventInfoStyles } from '@/theme/styles';

const EventInfo = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={EventInfoStyles.container}>

      <ScrollView>
        <View style={EventInfoStyles.imageWrapper}>
          <Image
            source={{ uri: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" }}
            style={{ width: '100%', aspectRatio: 16 / 9 }}
          />

          <View style={EventInfoStyles.aboutContainer}>
            <Text style={EventInfoStyles.aboutTitle}>About us</Text>
            <Text style={EventInfoStyles.aboutText}>
              Event Staff Specialist in creating luxury Event Staff for memorable events. Elevate Events is the United States leader in luxury and unforgettable events, with a pinnacle of luxury and excellence.
            </Text>
            <Text style={EventInfoStyles.tagline}>ELEVATE EVERY EXPERIENCE!</Text>

            {/* Social Media Icons */}
            <View style={EventInfoStyles.socialIcons}>
              <TouchableOpacity>
                <InstagramIcon style={EventInfoStyles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="globe-outline" size={RFValue(26)} color={Color.blue} style={EventInfoStyles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="logo-linkedin" size={RFValue(26)} color={Color.solidBlue} style={EventInfoStyles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* My Info Section */}
        <View style={EventInfoStyles.infoContainer}>
          <Text style={EventInfoStyles.sectionTitle}>My info</Text>

          <TouchableOpacity style={EventInfoStyles.infoItem} onPress={() => router.push("/updateinfo")}>
            <Ionicons name="person-circle" size={RFValue(30)} color={Color.primary} />
            <Text style={EventInfoStyles.infoText}>Update my info</Text>
            <Ionicons name="chevron-forward" size={RFValue(20)} color={Color.black} />
          </TouchableOpacity>

          <TouchableOpacity style={EventInfoStyles.infoItem}>
            <Ionicons name="images-sharp" size={RFValue(30)} color={Color.primary} />
            <Text style={EventInfoStyles.infoText}>My photo gallery</Text>
            <Ionicons name="chevron-forward" size={RFValue(20)} color={Color.black} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default EventInfo;
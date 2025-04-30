import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScheduleCardStyles } from '@/theme/styles'
import ElevateLogoSmall from '../assets/svgs/ElevateLogoSmall.svg'
import { Color } from '@/theme/Colors'

const ScheduleCard = () => {
  return (
    <SafeAreaView>
      <View style={ScheduleCardStyles.eventCard}>
        <View style={ScheduleCardStyles.eventHeader}>
          <Text style={ScheduleCardStyles.eventDay}>Thursday, April 24</Text>
          <View style={ScheduleCardStyles.confirmedBadge}>
            <Text style={ScheduleCardStyles.confirmedText}>Confirmed</Text>
          </View>
        </View>

        <View style={ScheduleCardStyles.eventDetails}>
          <View style={ScheduleCardStyles.eventCompany}>
            <ElevateLogoSmall style={ScheduleCardStyles.eventCompanyLogo} />
            <Text style={ScheduleCardStyles.eventName}>Phoenix, Test Event - Test</Text>
          </View>

          <View style={ScheduleCardStyles.eventInfo}>
            <Ionicons name="time-outline" size={20} color={Color.black} style={ScheduleCardStyles.eventIcon} />
            <Text style={ScheduleCardStyles.eventInfoText}>9:00 AM - 5:00 PM</Text>
          </View>

          <View style={ScheduleCardStyles.eventInfo}>
            <Ionicons name="location-outline" size={20} color={Color.black} style={ScheduleCardStyles.eventIcon} />
            <Text style={ScheduleCardStyles.eventInfoText}>Bali, Indonesia</Text>
          </View>
        </View>
      </View>
      <View style={ScheduleCardStyles.eventCard}>
        <View style={ScheduleCardStyles.eventHeader}>
          <Text style={ScheduleCardStyles.eventDay}>Friday, April 25</Text>
          <View style={ScheduleCardStyles.confirmedBadge}>
            <Text style={ScheduleCardStyles.confirmedText}>Confirmed</Text>
          </View>
        </View>

        <View style={ScheduleCardStyles.eventDetails}>
          <View style={ScheduleCardStyles.eventCompany}>
            <ElevateLogoSmall style={ScheduleCardStyles.eventCompanyLogo} />
            <Text style={ScheduleCardStyles.eventName}>Phoenix, OTS - Test</Text>
          </View>

          <View style={ScheduleCardStyles.eventInfo}>
            <Ionicons name="wallet-outline" size={20} color="#666" style={ScheduleCardStyles.eventIcon} />
            <Text style={ScheduleCardStyles.eventInfoText}>$25/hour est.</Text>
          </View>

          <View style={ScheduleCardStyles.eventInfo}>
            <Ionicons name="person-outline" size={20} color="#666" style={ScheduleCardStyles.eventIcon} />
            <Text style={ScheduleCardStyles.eventInfoText}>Barista</Text>
          </View>

          <View style={ScheduleCardStyles.eventInfo}>
            <Ionicons name="time-outline" size={20} color="#666" style={ScheduleCardStyles.eventIcon} />
            <Text style={ScheduleCardStyles.eventInfoText}>9:00 AM - 5:00 PM</Text>
          </View>

          <View style={ScheduleCardStyles.eventInfo}>
            <Ionicons name="location-outline" size={20} color="#666" style={ScheduleCardStyles.eventIcon} />
            <Text style={ScheduleCardStyles.eventInfoText}>Bali, Indonesia</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ScheduleCard
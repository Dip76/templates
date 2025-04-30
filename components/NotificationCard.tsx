import { View, Text } from 'react-native'
import React from 'react'
import { NotificationCardStyles } from '@/theme/styles'

const NotificationCard = () => {
    return (
        <View style={NotificationCardStyles.notificationsSection}>
            <Text style={NotificationCardStyles.notificationsTitle}>Notifications</Text>

            <View style={NotificationCardStyles.notificationCard}>
                <View style={NotificationCardStyles.notificationContent}>
                    <Text style={NotificationCardStyles.notificationText}>
                        <Text style={NotificationCardStyles.bookedText}>Booked</Text> for the job <Text style={NotificationCardStyles.boldText}>OTS Test, 4/25/2025</Text>
                    </Text>
                    <Text style={NotificationCardStyles.notificationTime}>6 days ago, Tuesday, April 1, 5:04 PM</Text>
                </View>
                <View style={NotificationCardStyles.divider} />
                <View style={NotificationCardStyles.notificationContent}>
                    <Text style={NotificationCardStyles.notificationText}>
                        <Text style={NotificationCardStyles.bookedText}>Booked</Text> for the job <Text style={NotificationCardStyles.boldText}>Test Event Test, 4/24/2025</Text>
                    </Text>
                    <Text style={NotificationCardStyles.notificationTime}>6 days ago, Tuesday, April 1, 4:42 PM</Text>
                </View>
            </View>
        </View>
    )
}

export default NotificationCard
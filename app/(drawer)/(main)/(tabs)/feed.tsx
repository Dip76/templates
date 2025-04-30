import React, { useCallback, useState } from "react";
import { View, Text, FlatList, SafeAreaView, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
import AvatarImage from "@/components/AvatarImage";
import { FeedScreenStyles } from "@/theme/styles";
import { set } from "date-fns";

type Feed = {
  id: number,
  company: string,
  logo: string
  time: string
  message: string

}

const feedData: Feed[] = [
  {
    id: 1,
    company: "Elevate Events",
    logo: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg',
    time: "a month ago",
    message: `Hey Elevate Team,\nWe are officially kicking off our referral program for 2025.\n\nReferral Program\n$100 for each referral\n\nConditions\n1. Must have a 5 star rating after 5 events\n2. Submission period March 12th - July 12th 2025\n3. Must claim your first and last name as their referral at https://elev8.la/career\n\nHow to get 5 stars after 5 events\nPunctuality: Outstanding\nPresentation: Outstanding\nInitiative: Outstanding`,
  },
  {
    id: 2,
    company: "Elevate Events",
    logo: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg',
    time: "2 weeks ago",
    message: `Team, we’re hiring new talent for summer 2025!\n\nIf you know someone who’d be a great fit, send them to elev8.la/career to apply.\n\nThanks for growing our team with quality!`,
  },
  {
    id: 3,
    company: "Elevate Events",
    logo: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg',
    time: "3 days ago",
    message: `Reminder: Referral bonus season ends July 12th!\n\nSubmit your referrals before the deadline to be eligible for $100 bonuses.`,
  },
  {
    id: 4,
    company: "Elevate Events",
    logo: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg',
    time: "3 days ago",
    message: `Reminder: Referral bonus season ends July 12th!\n\nSubmit your referrals before the deadline to be eligible for $100 bonuses.`,
  },
];

export default function FeedScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }
      , 2000);
  }, []);


  const renderItem = ({ item }: { item: Feed }) => (
    <View style={FeedScreenStyles.card}>
      <View style={FeedScreenStyles.header}>
        <AvatarImage imageUrl={item.logo} />
        <View>
          <Text style={FeedScreenStyles.company}>{item.company}</Text>
          <Text style={FeedScreenStyles.time}>{item.time}</Text>
        </View>
      </View>

      <Text style={FeedScreenStyles.message}>{item.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={FeedScreenStyles.container}>
      <StatusBar style='light' translucent={false} />
      <FlatList
        data={feedData}
        keyExtractor={(item) => { return `${item.id}` }}
        renderItem={renderItem}
        contentContainerStyle={FeedScreenStyles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}

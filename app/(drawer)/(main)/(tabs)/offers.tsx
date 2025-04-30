import { View, Text, TouchableOpacity, ScrollView, Dimensions, Animated, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import NoOffersScreen from '../../../../assets/svgs/NoOffersScreen.svg'
import { OffersScreenStyles } from "@/theme/styles";
import { RFValue } from "react-native-responsive-fontsize";
import CustomCalendar from "@/components/CustomCalender";
import FilterModal from "@/components/FilterModal";
import { platformValue } from "@/utils";
import { BottomSheetModal, BottomSheetView, } from '@gorhom/bottom-sheet';
import { format } from 'date-fns';
import { Color } from "@/theme/Colors";

const { height } = Dimensions.get('window');

export default function OffersScreen() {
  const today = format(new Date, 'yyyy-MM-dd')
  const navigation = useNavigation<any>();
  const [selectedDate, setSelectedDate] = useState(today);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMMM yyyy'));
  const scrollViewRef = useRef<ScrollView>(null);
  const lastScrollY = useRef(0);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Refresh Control
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }
      , 2000);
  }, []);

  // Animation value for calendar
  const calendarHeight = RFValue(320);
  const calendarAnimValue = useRef(new Animated.Value(0)).current;

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // Function to toggle calendar with animation
  const toggleCalendar = (show: boolean) => {
    Animated.timing(calendarAnimValue, {
      toValue: show ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsCalendarVisible(show);
    });
  };

  // Animated styles for the calendar
  const calendarStyle = {
    opacity: calendarAnimValue,
    maxHeight: calendarAnimValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, calendarHeight]
    }),
    transform: [
      {
        translateY: calendarAnimValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-20, 0],
        })
      }
    ]
  };

  {/* CustomHeader */ }
  const CustomHeader = () => (
    <View style={OffersScreenStyles.header}>
      {/* Menu Button */}
      <TouchableOpacity style={OffersScreenStyles.menuButton} onPress={() => navigation.openDrawer()} >
        <Ionicons name="menu" size={RFValue(24)} color="black" />
      </TouchableOpacity>
      {/* Date Selector */}
      <TouchableOpacity style={OffersScreenStyles.dateSelector} onPress={() => toggleCalendar(!isCalendarVisible)}>
        <Ionicons name="calendar-outline" size={RFValue(18)} color="black" />
        <Text style={OffersScreenStyles.dateText}>{currentMonth}</Text>
        <Ionicons name={isCalendarVisible ? "chevron-up" : "chevron-down"} size={RFValue(18)} color="black" />
      </TouchableOpacity>
      {/* Filter Button */}
      <TouchableOpacity style={OffersScreenStyles.filterButton} onPress={handlePresentModalPress}>
        <Ionicons name="funnel-outline" size={RFValue(18)} color="black" />
      </TouchableOpacity>
    </View>
  );

  // Set Custom Header
  useEffect(() => {
    navigation.setOptions({
      header: () => (<CustomHeader />),
    });
  }, [isCalendarVisible, currentMonth]);

  // Handle Search 
  const handleSearch = () => {
    if (searchText.trim()) {
      console.log('Searching for:', searchText);
      // Add search logic here
    }
  };

  // Hide Calendar On scroll up
  const handleScroll = (event: any) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    const scrollDifference = currentScrollY - lastScrollY.current;
    if (scrollDifference > 5 && isCalendarVisible) {
      toggleCalendar(false);
    }
    lastScrollY.current = currentScrollY;
  };

  // Update Month Of Date Selected
  const updateCurrentMonth = (date: Date) => {
    setCurrentMonth(format(date, 'MMMM yyyy'));
  };

  const updateCurrentSelectedDate = (dateString: string) => {
    const date = new Date(dateString);
    updateCurrentMonth(date)
    setSelectedDate(dateString);
    toggleCalendar(false);
  }
  return (
    <View style={OffersScreenStyles.container}>
      <StatusBar style='light' translucent={false} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={OffersScreenStyles.container}
      >
        {/* Calendar Container - Always present but with animated height/opacity */}
        <Animated.View style={[{ backgroundColor: Color.white, overflow: 'hidden', zIndex: 10, }, calendarStyle]}>
          <CustomCalendar
            selectedDate={selectedDate}
            currentDate={today}
            minDate={today}
            setSelectedDate={updateCurrentSelectedDate}
            onMonthChange={updateCurrentMonth}
          />
        </Animated.View>

        {/* Search Input */}
        <View style={OffersScreenStyles.searchContainer}>
          <View style={OffersScreenStyles.searchBar}>
            <Ionicons name="search" size={RFValue(18)} color={Color.gray} style={OffersScreenStyles.searchIcon} />
            <TextInput
              style={OffersScreenStyles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Offer Content */}
        <ScrollView
          ref={scrollViewRef}
          style={[{ flexGrow: 1 }]}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', minHeight: platformValue(height * 0.8, height * 0.6, 0), }}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
          }
        >
          <View style={[{ height: 'auto', justifyContent: 'center', alignItems: 'center', }]}>
            {/* No Content */}
            <NoOffersScreen />
            <Text style={OffersScreenStyles.emptyTitle}>No New Offers</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* Filter Modal */}
      <BottomSheetModal ref={bottomSheetModalRef}
        snapPoints={['85%']}
        enableContentPanningGesture={false}
        backdropComponent={({ style }) => (
          <TouchableWithoutFeedback style={[style]} onPress={() => bottomSheetModalRef.current?.close()}>
            <View style={[style]} />
          </TouchableWithoutFeedback>
        )}
        enableDynamicSizing={false}
        containerStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        style={OffersScreenStyles.sheetcontainer}
        handleIndicatorStyle={{ backgroundColor: Color.gray }}>
        <BottomSheetView style={OffersScreenStyles.sheetwrapper}>
          <FilterModal onDone={() => bottomSheetModalRef.current?.close()} />
        </BottomSheetView>
      </BottomSheetModal>
    </View >
  );
}
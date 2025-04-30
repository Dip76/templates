import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CalendarList, DateData } from 'react-native-calendars'
import { Color } from '@/theme/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { CustomCalendarListStyles } from '@/theme/styles';
import { format } from 'date-fns';

interface MarkedDates {
    [date: string]: {
        startingDay?: boolean;
        endingDay?: boolean;
        color?: string;
        textColor?: string;
    };
}

interface CustomCalendarListProps {
    selectedDate: {
        startDate: string;
        endDate: string;
    }
    onClose: () => void;
    onConfirm: (dateRange: { startDate: string; endDate: string }) => void;
}

const CustomCalendarList: React.FC<CustomCalendarListProps> = ({
    selectedDate,
    onClose,
    onConfirm,
}) => {
    const [markedDates, setMarkedDates] = useState<MarkedDates>({});
    const [dateRange, setDateRange] = useState({
        startDate: selectedDate.startDate || '',
        endDate: selectedDate.endDate || ''
    });

    // Initialize marked dates when component mounts or selectedDate changes
    useEffect(() => {
        if (selectedDate.startDate) {
            const newDateRange = {
                startDate: selectedDate.startDate,
                endDate: selectedDate.endDate || selectedDate.startDate
            };

            setDateRange(newDateRange);
            generateMarkedDates(newDateRange.startDate, newDateRange.endDate);
        }
    }, [selectedDate]);

    // Generate marked dates for a given range
    const generateMarkedDates = (start: string, end: string) => {
        if (!start) return;

        const newMarkedDates: MarkedDates = {};
        let currentDate = new Date(start);
        const endDateObj = new Date(end || start);

        while (currentDate <= endDateObj) {
            const dateString = format(currentDate, 'yyyy-MM-dd')

            if (dateString === start) {
                newMarkedDates[dateString] = {
                    startingDay: true,
                    color: Color.primary,
                    textColor: Color.white
                };

                // If start and end are the same, mark as both
                if (start === end || !end) {
                    newMarkedDates[dateString].endingDay = true;
                }
            } else if (dateString === end) {
                newMarkedDates[dateString] = {
                    endingDay: true,
                    color: Color.primary,
                    textColor: Color.white
                };
            } else {
                newMarkedDates[dateString] = {
                    color: Color.primary,
                    textColor: Color.white
                };
            }

            currentDate.setDate(currentDate.getDate() + 1);
        }

        setMarkedDates(newMarkedDates);
    };

    /// Handle day press event
    const onDayPress = (day: DateData) => {
        if (!dateRange.startDate || (dateRange.startDate && dateRange.endDate)) {
            // Start new range
            const startDate = day.dateString;
            const newMarkedDates: MarkedDates = {
                [startDate]: {
                    startingDay: true,
                    endingDay: true, // Initially it's both start and end
                    color: Color.primary,
                    textColor: Color.white
                }
            };

            setDateRange({ startDate, endDate: '' });
            setMarkedDates(newMarkedDates);
        } else {
            // Complete the range
            let start = dateRange.startDate;
            let end = day.dateString;
            // Swap dates if end is before start
            if (new Date(end) < new Date(start)) {
                const temp = start;
                start = end;
                end = temp;
            }
            // Set the date range and generate marked dates
            const newDateRange = { startDate: start, endDate: end };
            setDateRange(newDateRange);
            generateMarkedDates(start, end);
        }
    };
    /// Confirm button handler
    const handleConfirm = () => {
        onConfirm(dateRange);
    };
    // reset button handler
    const resetSelection = () => {
        setMarkedDates({});
        setDateRange({ startDate: '', endDate: '' });
    };

    return (
        <View style={CustomCalendarListStyles.container}>
            {/* Header with buttons */}
            <View style={CustomCalendarListStyles.header}>
                <Text style={CustomCalendarListStyles.title}>
                    Select Dates
                </Text>
                {/*Buttons Container */}
                <View style={CustomCalendarListStyles.buttonContainer}>
                    <TouchableOpacity onPress={handleConfirm}>
                        <Octicons name="check" size={RFValue(18)} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={resetSelection}>
                        <Ionicons name="trash-outline" size={RFValue(18)} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose}>
                        <Octicons name="x" size={RFValue(18)} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Calendar List */}
            <CalendarList
                current={dateRange.startDate}
                onDayPress={onDayPress}
                markedDates={markedDates}
                markingType="period"
                pastScrollRange={12}
                futureScrollRange={12}
                scrollEnabled={true}
                showScrollIndicator={true}
                firstDay={1}
                theme={{
                    todayTextColor: Color.primary,
                    arrowColor: Color.black,
                    monthTextColor: Color.black,
                    textSectionTitleColor: Color.black,
                    selectedDayBackgroundColor: Color.primary,
                    selectedDayTextColor: Color.white,
                    textMonthFontWeight: '500',
                    calendarBackground: Color.white,
                }}
            />
        </View>
    )
}

export default CustomCalendarList

import { Color } from "@/theme/Colors";
import { format } from "date-fns";
import React from "react";
import { StyleSheet } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { RFValue } from "react-native-responsive-fontsize";

interface CustomCalendarProps {
    selectedDate: string;
    currentDate?: string;
    minDate?: string;
    setSelectedDate: (date: string) => void;
    onMonthChange: (date: Date) => void
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ selectedDate, currentDate, minDate, setSelectedDate, onMonthChange }) => {
    const displayCurrentDate = selectedDate || currentDate || format(new Date, 'yyyy-MM-dd')
    // const displayMinDate = minDate || format(new Date, 'yyyy-MM-dd')

    return (
        <Calendar
            current={displayCurrentDate}
            // minDate={displayMinDate}
            onMonthChange={(monthData: DateData) => {
                onMonthChange(new Date(monthData.dateString))
            }}
            onDayPress={(day: DateData) => {
                setSelectedDate(day.dateString);
            }}
            markedDates={{
                [selectedDate]: {
                    selected: true,
                    selectedColor: Color.primary,
                },
            }}
            theme={{
                calendarBackground: Color.white,
                textSectionTitleColor: Color.secondaryText,
                selectedDayTextColor: Color.white,
                todayTextColor: Color.primary,
                textDisabledColor: Color.secondary,
            }}
            enableSwipeMonths={true}
            firstDay={1}
            renderHeader={() => null}
            hideArrows={true}
            style={styles.calendar}
        />
    );
};


const styles = StyleSheet.create({
    calendar: {
        marginHorizontal: RFValue(16),
        borderRadius: RFValue(8),
        backgroundColor: Color.white,
        overflow: 'hidden',
    },
});

export default CustomCalendar
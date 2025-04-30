import { Color } from '@/theme/Colors';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


interface SingleSelectionProps {
    options: SelectionOption[];
    selectedValue: string;
    onSelect: (value: SelectionOption) => void;
    containerStyle?: object;
    itemStyle?: object;
    textStyle?: object;
}

const BottomSheetSingleSelectionList: React.FC<SingleSelectionProps> = ({ options, selectedValue, onSelect, containerStyle, itemStyle, textStyle }) => {
    const renderItem = ({ item }: { item: SelectionOption }) => {
        const isSelected = item.value === selectedValue;
        return (
            <TouchableOpacity
                style={[styles.item, itemStyle]}
                onPress={() => onSelect(item)}
            >
                <View style={styles.radioContainer}>
                    <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                        {isSelected && <View style={styles.radioInner} />}
                    </View>
                </View>
                <Text style={[styles.text, textStyle]}>{item.label}</Text>
            </TouchableOpacity>
        );
    };

    const renderSeparator = () => <View style={styles.separator} />;

    return (
        <BottomSheetFlatList
            data={options}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={renderSeparator}
            contentContainerStyle={[styles.listContent, containerStyle]}
            style={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: RFValue(14),
        paddingHorizontal: RFValue(20),
    },
    radioContainer: {
        marginRight: RFValue(10),
    },
    radioOuter: {
        height: RFValue(18),
        width: RFValue(18),
        borderRadius: RFValue(9),
        borderWidth: 2,
        borderColor: Color.gray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioOuterSelected: {
        borderColor: Color.primary,
    },
    radioInner: {
        height: RFValue(9),
        width: RFValue(9),
        borderRadius: RFValue(4.5),
        backgroundColor: Color.primary,
    },
    text: {
        fontSize: RFValue(14),
    },
    separator: {
        height: 1,
        backgroundColor: Color.gray,
    },
    listContent: {
        paddingBottom: Platform.OS === 'android' ? RFValue(80) : RFValue(20),
    },
    list: {
        flexGrow: 1,
    },
});

export default BottomSheetSingleSelectionList;
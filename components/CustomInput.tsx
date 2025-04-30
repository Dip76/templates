import { CustomInputStyles } from "@/theme/styles";
import React from "react";
import { Text, TextInput } from "react-native";

type CustomInputProps = {
    label: string;
    required?: boolean;
} & React.ComponentProps<typeof TextInput>

const CustomInput: React.FC<CustomInputProps> = ({
    label,
    style,
    multiline,
    required = false,
    ...textInputProps
}) => (
    <>
        <Text style={CustomInputStyles.label}>
            {label} {required && <Text>*</Text>}
        </Text>
        <TextInput
            style={[CustomInputStyles.input, multiline && CustomInputStyles.textArea, style]}
            textAlignVertical={multiline ? 'top' : 'center'}
            {...textInputProps}
        />
    </>
)

export default CustomInput

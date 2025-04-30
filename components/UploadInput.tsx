import { Color } from "@/theme/Colors"
import { UploadInputStyles } from "@/theme/styles"
import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"

type UploadInputProps = {
    label: string
    required?: boolean
    value: string | null
    onChange: (uri: string | null) => void
    type?: 'image' | 'file' | 'both'
}

const UploadInput: React.FC<UploadInputProps> = ({
    label,
    required = false,
    value,
    onChange,
    type = 'both',
}) => {
    const pickImage = async () => {
        // Handle image picking logic here
    }

    const pickFile = async () => {
        // Handle file picking logic here
    }

    const renderPreview = () => {
        if (!value) return null
        const isImage = value.match(/\.(jpg|jpeg|png|gif|bmp)$/i)
        return (
            <View style={UploadInputStyles.previewContainer}>
                {isImage ? (
                    <Image source={{ uri: value }} style={UploadInputStyles.previewImage} />
                ) : (
                    <Text style={UploadInputStyles.fileName}>📄 File Uploaded</Text>
                )}
                <TouchableOpacity
                    onPress={() => onChange(null)}
                    style={UploadInputStyles.removeBtn}
                >
                    <Ionicons name="close" size={RFValue(12)} color={Color.white} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={UploadInputStyles.container}>
            <Text style={UploadInputStyles.label}>
                {label} {required && <Text>*</Text>}
            </Text>

            {renderPreview()}

            {!value && (
                <View style={UploadInputStyles.btnRow}>
                    {(type === 'image' || type === 'both') && (
                        <TouchableOpacity style={UploadInputStyles.button} onPress={pickImage}>
                            <Ionicons name="image" size={16} color={Color.gray} />
                            <Text style={UploadInputStyles.btnText}>Photo</Text>
                        </TouchableOpacity>
                    )}
                    {(type === 'file' || type === 'both') && (
                        <TouchableOpacity style={UploadInputStyles.button} onPress={pickFile}>
                            <Ionicons name="document" size={16} color={Color.gray} />
                            <Text style={UploadInputStyles.btnText}>File</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}
        </View>
    )
}

export default UploadInput

import { requestMediaLibraryPermissionsAsync, requestCameraPermissionsAsync, launchImageLibraryAsync, launchCameraAsync, ImagePickerResult, MediaType, } from 'expo-image-picker';

interface PickerOptions {
    mediaTypes?: MediaType | MediaType[];
    aspect?: [number, number];
    quality?: number;
    allowsEditing?: boolean;
}

interface PickerResponse {
    uri: string | null;
}

const DEFAULT_OPTIONS: PickerOptions = {
    mediaTypes: ['images'],
    aspect: [4, 3],
    quality: 1,
    allowsEditing: true,
};

const ImagePickerUtils = {

    pickFromGallery: async (options: PickerOptions = {}): Promise<PickerResponse> => {
        const { status } = await requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            console.warn('Media library permission denied');
            return { uri: null };
        }
        const result: ImagePickerResult = await launchImageLibraryAsync({
            mediaTypes: options.mediaTypes ?? DEFAULT_OPTIONS.mediaTypes,
            aspect: options.aspect ?? DEFAULT_OPTIONS.aspect,
            quality: options.quality ?? DEFAULT_OPTIONS.quality,
            allowsEditing: options.allowsEditing ?? DEFAULT_OPTIONS.allowsEditing,
        });

        if (result.canceled || !result.assets?.length) {
            return { uri: null };
        }

        return { uri: result.assets[0].uri };
    },

    pickFromCamera: async (options: PickerOptions = {}): Promise<PickerResponse> => {
        const { status } = await requestCameraPermissionsAsync();
        if (status !== 'granted') {
            console.warn('Camera permission denied');
            return { uri: null };
        }
        const result: ImagePickerResult = await launchCameraAsync({
            mediaTypes: options.mediaTypes ?? DEFAULT_OPTIONS.mediaTypes,
            aspect: options.aspect ?? DEFAULT_OPTIONS.aspect,
            quality: options.quality ?? DEFAULT_OPTIONS.quality,
            allowsEditing: options.allowsEditing ?? DEFAULT_OPTIONS.allowsEditing,
        });

        if (result.canceled || !result.assets?.length) {
            return { uri: null };
        }

        return { uri: result.assets[0].uri };
    },
};

export default ImagePickerUtils;

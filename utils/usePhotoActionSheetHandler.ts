import { useActionSheet } from "@expo/react-native-action-sheet";

// Enum for photo options
export enum PhotoOption {
    camera = 'Take Photo',
    gallery = 'Choose from Library',
    cancel = 'Cancel',
}

// ActionSheetOptions interface specifically for PhotoOption
interface ActionSheetOptions {
    title?: string;
    cancelButtonIndex?: number;
    onOptionSelect: (option: PhotoOption) => void;
}

export const usePhotoActionSheetHandler = () => {
    const { showActionSheetWithOptions } = useActionSheet();

    // Default values for PhotoOption enum (hardcoded)
    const defaultOptions: PhotoOption[] = [
        PhotoOption.camera,
        PhotoOption.gallery,
    ];
    const defaultCancelButtonIndex = defaultOptions.length;  // Cancel is last
    const defaultTitle = 'Select an Option';

    const handlePress = ({
        title = defaultTitle,
        cancelButtonIndex = defaultCancelButtonIndex,
        onOptionSelect,
    }: ActionSheetOptions) => {
        // Ensure Cancel is always the last option
        const options = [...defaultOptions, PhotoOption.cancel];
        // Show action sheet with the options
        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                title, // Dynamically passing the title
            },
            (buttonIndex?: number) => {
                if (buttonIndex !== undefined && buttonIndex !== cancelButtonIndex) {
                    onOptionSelect(options[buttonIndex]); // Call callback with the selected option
                }
            }
        );
    };

    return handlePress;
};

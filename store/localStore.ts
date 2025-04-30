import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from "zustand";

interface localStateModal {
    setData: (key: string, value: unknown) => Promise<unknown>;
    getData: (key: string) => Promise<unknown>;
    removeData: (key: string) => Promise<unknown>;
    clearAllData: () => Promise<unknown>;
}

const initialState = {
    setData: () => { },
    getData: () => { },
    removeData: () => { },
    clearAllData: () => { },
}

export const localSlice = (set: Function, get: Function) => ({
    ...initialState,

    setData: async (key: string, value: unknown) => {
        try {
            const JSONData = JSON.stringify(value);
            await AsyncStorage.setItem(key, JSONData);
            console.log("Data is stored in asyncstorage successfully ==> ")
        } catch (error) {
            console.error(`Error setting data with key ==> "${key}":`, error);
        }
    },

    getData: async (key: string) => {
        try {
            const data = await AsyncStorage.getItem(key);
            if (data != null) {
                return JSON.parse(data);
            }
            return null;
        } catch (error) {
            console.error(`Error getting data with key ==> "${key}":`, error);
        }
    },

    removeData: async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
            console.log("Data has been removed.")
        } catch (error) {
            console.error(`Error removing data with key ==> "${key}":`, error);
        }
    },

    clearAllData: async () => {
        try {
            await AsyncStorage.clear();
            console.log("All data has been cleared.")
        } catch (error) {
            console.error(`Error clearing data ==> `, error);
        }
    }
})

// @ts-ignore
export const useLocalStore = create<localStateModal>((...a) => ({
    // @ts-ignore
    ...localSlice(...a),
}));
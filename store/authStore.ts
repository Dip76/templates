import axios from "axios";
import { create } from 'zustand';
import AsyncStorage from "@react-native-async-storage/async-storage";

axios.defaults.headers.common['Content-Type'] = 'application/json'
interface authStateModal {
    userData: any;
    isLoggedIn: boolean;
    checkAuth:() => Promise<String>;
    resetAuthStore: () => (mode: string) => Promise<string>;
}

const initialState = {
    userData: {},
    isLoggedIn: false,
}

export const authSlice = (set: Function, get: Function) => ({
    ...initialState,

    checkAuth: async () => {
        // const token = await AsyncStorage.getItem('auth_token');
        const token = "uyertuidfvhu4et"

        if (token) {
            // Optional: Fetch user details from token or endpoint
            // const user = await api.get('/me');
            set({
                isLoggedIn: true,
                // userData: user, // if fetched
            });
        } else {
            set({ isLoggedIn: false, userData: {} });
        }
    },

    resetAuthStore: async () => {
        set({
            userData: {},
            isLoggedIn: false,
        });
    },
})

// @ts-ignore
export const useAuthStore = create<authStateModal>((...a) => ({
    // @ts-ignore
    ...authSlice(...a),
}));
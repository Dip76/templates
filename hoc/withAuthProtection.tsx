// src/hoc/withAuthProtection.tsx
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'expo-router';

const withAuthProtection = (WrappedComponent: React.ComponentType) => {
  return function AuthProtected(props: any) {
    const { isLoggedIn, checkAuth } = useAuthStore();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const verifyAuth = async () => {
        await checkAuth();
        setLoading(false);
      };
      verifyAuth();
    }, []);

    useEffect(() => {
      if (!loading && !isLoggedIn) {
        router.replace('/(auth)/login');
      }
    }, [isLoggedIn, loading]);

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthProtection;

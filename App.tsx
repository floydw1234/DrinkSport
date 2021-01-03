import { Button, ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const registerForPushNotifications = async () => { 
    try {
       const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
       if (!permission.granted) return;
       const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    } catch (error) {
      console.log('Error getting a token', error);
    }
  }

  useEffect(() => {
    registerForPushNotifications();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      
    );
  }
}

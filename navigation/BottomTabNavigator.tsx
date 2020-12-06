import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Feather } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CloudTabScreen from '../screens/CloudScreen';
import MessagesTabScreen from '../screens/MessagesScreen';
import PeopleTabScreen from '../screens/PeopleScreen';
import SettingsTabScreen from '../screens/SettingsScreen';
import { BottomTabParamList, CloudTabParamList, MessagesTabParamList, PeopleTabParamList, SettingsTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Cloud"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Cloud"
        component={CloudTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <Feather name="cloud-snow" size={24} color="black" />,
        }}
      />
      
      <BottomTab.Screen
        name="Messages"
        component={MessagesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <Feather name="message-circle" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="People"
        component={PeopleTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-people" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const CloudTabStack = createStackNavigator<CloudTabParamList>();

function CloudTabNavigator() {
  return (
    <CloudTabStack.Navigator>
      <CloudTabStack.Screen
        name="CloudTabScreen"
        component={CloudTabScreen}
        options={{ headerTitle: 'Messages' }}
      />
    </CloudTabStack.Navigator>
  );
}

const MessagesTabStack = createStackNavigator<MessagesTabParamList>();

function MessagesTabNavigator() {
  return (
    <MessagesTabStack.Navigator>
      <MessagesTabStack.Screen
        name="MessagesTabScreen"
        component={MessagesTabScreen}
        options={{ headerTitle: 'Friends' }}
      />
    </MessagesTabStack.Navigator>
  );
}

const PeopleTabStack = createStackNavigator<PeopleTabParamList>();

function PeopleTabNavigator() {
  return (
    <PeopleTabStack.Navigator>
      <PeopleTabStack.Screen
        name="PeopleTabScreen"
        component={PeopleTabScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </PeopleTabStack.Navigator>
  );
}

const SettingsTabStack = createStackNavigator<SettingsTabParamList>();

function SettingsTabNavigator() {
  return (
    <SettingsTabStack.Navigator>
      <SettingsTabStack.Screen
        name="SettingsTabScreen"
        component={SettingsTabScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </SettingsTabStack.Navigator>
  );
}

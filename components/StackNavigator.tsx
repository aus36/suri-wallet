import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import Settings from '../screens/SettingsScreen';
import Credentials from '../screens/ConnectionsScreen';
import * as Haptics from 'expo-haptics';
import Profile from '../screens/ProfileScreen';
import NewCredential from '../screens/NewCredentialScreen';
import Users from '../screens/UsersScreen';
import Dev from '../screens/DevScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function TabNavigator() { // contains all pages that have bottom tab navigator

  const [selected, setSelected] = useState("Profile");

  function handleColor(tab: string) { // function for handling the change of color when pressing a tab
    if(selected === tab) {
      return "dodgerblue";
    } else {
      return "white";
    }
  }

    return (
        <Tabs.Navigator initialRouteName = "Profile" screenOptions={{tabBarStyle: {backgroundColor: "#303030"}}}>
            <Tabs.Screen 
              name="Credentials"
              component={Credentials} 
              listeners={{tabPress: () => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium ); setSelected("Connections")}}}
              options={{
                tabBarLabel: 'Connections',
                tabBarIcon: () => <Ionicons name="people" size={32} color={handleColor("Connections")} />,
              }}
            />
            <Tabs.Screen
              name="Profile"
              component={Profile}
              listeners={{tabPress: () => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium ); setSelected("Profile")}}}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: () => <Ionicons name="person" size={24} color={handleColor("Profile")}/>
              }}
            />
            <Tabs.Screen
              name="Settings"
              component={Settings}
              listeners={{tabPress: () => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium ); setSelected("Settings")}}}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: () => <FontAwesome name="gear" size={24} color={handleColor("Settings")}/>
              }}
            />
        </Tabs.Navigator>
    );
}

export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="NewCredential" component={NewCredential} />
            <Stack.Screen name="Users" component={Users} />
            <Stack.Screen name="Dev" component={Dev} />
            <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown: false, gestureEnabled:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
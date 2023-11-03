import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginScreen';
import Register from '../screens/registration/RegisterScreen';
import RegistrationResultScreen from '../screens/registration/RegistrationResultScreen';
import Settings from '../screens/SettingsScreen';
import Credentials from '../screens/credentials/CredentialsScreen';
import CredentialModification from '../screens/credentials/CredentialModificationScreen';
import * as Haptics from 'expo-haptics';
import Profile from '../screens/ProfileScreen';
import NewCredential from '../screens/credentials/NewCredentialScreen';
import Users from '../screens/UsersScreen';
import Dev from '../screens/DevScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
        <Tabs.Navigator initialRouteName = "Profile" screenOptions={{tabBarStyle: {backgroundColor: "#141414"}}}>
            <Tabs.Screen 
              name="Credentials"
              component={Credentials} 
              listeners={{tabPress: () => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium ); setSelected("Credentials")}}}
              options={{
                tabBarLabel: 'Credentials',
                tabBarIcon: () => <Entypo name="documents" size={24} color={handleColor("Credentials")}/>,
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
            <Stack.Screen name="RegisterResults" component={RegistrationResultScreen} initialParams={{didDoc: {}, SCVP: {}}}/>
            <Stack.Screen name="CredentialModification" component={CredentialModification} />
            <Stack.Screen name="NewCredential" component={NewCredential} />
            <Stack.Screen name="Users" component={Users} />
            <Stack.Screen name="Dev" component={Dev} />
            <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown: false, gestureEnabled:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
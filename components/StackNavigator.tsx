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
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function TabNavigator() { //Contains all pages that have bottom tab navigator
    return (
        <Tabs.Navigator initialRouteName = "Profile" screenOptions={{tabBarStyle: {backgroundColor: "black"}}}>
            <Tabs.Screen 
              name="Credentials"
              component={Credentials} 
              listeners={{tabPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}
              options={{
                tabBarLabel: 'Credentials',
                tabBarIcon: () => <Entypo name="documents" size={24} color="white"/>,
              }}
            />
            <Tabs.Screen
              name="Profile"
              component={Profile}
              listeners={{tabPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: () => <Ionicons name="person" size={24} color="white"/>
              }}
            />
            <Tabs.Screen
              name="Settings"
              component={Settings}
              listeners={{tabPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: () => <FontAwesome name="gear" size={24} color="white"/>
              }}
            />
        </Tabs.Navigator>
    );
}

export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterResults" component={RegistrationResultScreen} initialParams={{didDoc: {}, SCVP: {}}}/>
            <Stack.Screen name="CredentialModification" component={CredentialModification} />
            <Stack.Screen name="NewCredential" component={NewCredential} />
            <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';
import Register from '../screens/registration/RegisterScreen';
import RegistrationResultScreen from '../screens/registration/RegistrationResultScreen';
import Settings from '../screens/SettingsScreen';
import Credentials from '../screens/credentials/CredentialsScreen';
import CredentialModification from '../screens/credentials/CredentialModificationScreen';
import * as Haptics from 'expo-haptics';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function TabNavigator() { //Contains all pages that have bottom tab navigator
    return (
        <Tabs.Navigator initialRouteName = "Home" screenOptions={{tabBarStyle: {backgroundColor: "black"}}}>
            <Tabs.Screen name="Credentials" component={Credentials} listeners={{tabPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}/>
            <Tabs.Screen name="Home" component={Home} listeners={{tabPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}/>
            <Tabs.Screen name="Settings" component={Settings} listeners={{tabPress: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}/>
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
            <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
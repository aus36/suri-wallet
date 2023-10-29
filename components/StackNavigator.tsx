import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';
import Register from '../screens/registration/RegisterScreen';
import RegistrationResultScreen from '../screens/registration/RegistrationResultScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() { //Contains all pages that have bottom tab navigator
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: "black"}}}>
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
}

export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterResults" component={RegistrationResultScreen} initialParams={{didDoc: {}, SCVP: {}}}/>
            <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
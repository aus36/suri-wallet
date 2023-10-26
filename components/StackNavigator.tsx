import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';
import Register from '../screens/registration/RegisterScreen';
import RegistrationResultScreen from '../screens/registration/RegistrationResultScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterResults" component={RegistrationResultScreen} initialParams={{didDoc: {}, SCVP: {}}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
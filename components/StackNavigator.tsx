import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
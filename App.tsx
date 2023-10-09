import 'react-native-gesture-handler';
import StackNavigator from './components/StackNavigator';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
}
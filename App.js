import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from './screens/Home';
import Account from './screens/Account';
import ScannerPage from './screens/ScannerPage';
import TicketInfo from './screens/TicketInfo';

const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: true }} name="Parkir.In Admin" component={Home} />
      <Stack.Screen options={{ headerShown: true }} name="Scan Customer Barcode" component={ScannerPage} />
      <Stack.Screen options={{ headerShown: true }} name="Customer Ticket Info" component={TicketInfo} />
    </Stack.Navigator>
  );
};

const StackAccount = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: true }} name="Admin Account" component={Account} />
    </Stack.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Scan') {
              iconName = focused ? 'scan' : 'scan-outline';
            } else if (route.name === 'MyAccount') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#D9A14E',
          tabBarInactiveTintColor: '#2F3B6E',
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name='Scan'
          component={StackHome}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name='MyAccount'
          component={StackAccount}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

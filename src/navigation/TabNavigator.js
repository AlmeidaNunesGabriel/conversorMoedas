import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { 
  DollarScreen, 
  EuroScreen, 
  BitcoinScreen 
} from '../screens'; 
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Dollar: 'currency-usd',
          Euro: 'currency-eur',
          Bitcoin: 'bitcoin',
          Others: 'bank', // Ícone para as outras moedas
        };
        return <MaterialCommunityIcons name={icons[route.name]} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#3498db',
      tabBarInactiveTintColor: '#7f8c8d',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Dollar" component={DollarScreen} options={{ title: 'Dólar' }} />
    <Tab.Screen name="Euro" component={EuroScreen} />
    <Tab.Screen name="Bitcoin" component={BitcoinScreen} />
    <Tab.Screen name="Others" component={TopTabNavigator} options={{ title: 'Outras' }} />
  </Tab.Navigator>
);

export default TabNavigator;
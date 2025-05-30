import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { 
  DollarScreen, 
  EuroScreen, 
  BitcoinScreen 
} from '../screens'; 
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Dolar: 'currency-usd',
          Euro: 'currency-eur',
          Bitcoin: 'bitcoin',
        };
        return <MaterialCommunityIcons name={icons[route.name]} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#3498db',
      tabBarInactiveTintColor: '#7f8c8d',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Dólar" component={DollarScreen} />
    <Tab.Screen name="Euro" component={EuroScreen} />
    <Tab.Screen name="Bitcoin" component={BitcoinScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
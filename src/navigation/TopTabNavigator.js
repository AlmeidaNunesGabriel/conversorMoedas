import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  YuanScreen, 
  YenScreen, 
  EthereumScreen 
} from '../screens';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#3498db' }}>
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#7f8c8d',
        tabBarIndicatorStyle: {
          backgroundColor: '#3498db',
          height: 3,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
          textTransform: 'none',
        },
      }}
    >
      <TopTab.Screen name="Yuan" component={YuanScreen} options={{ title: 'Yuan (CNY)' }} />
      <TopTab.Screen name="Yen" component={YenScreen} options={{ title: 'Iene (JPY)' }} />
      <TopTab.Screen name="Ethereum" component={EthereumScreen} options={{ title: 'Ethereum (ETH)' }} />
    </TopTab.Navigator>
  </SafeAreaView>
);

export default TopTabNavigator;
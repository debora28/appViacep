import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Pages2 from './pages/Pages2';
import Pages3 from './pages/Pages3';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes: () => React$Node = () => {
  const tabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Pages2" component={Pages2} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName="Home">
        <AppStack.Screen name="Home" component={tabs} />
        <AppStack.Screen name="Pages3" component={Pages3} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

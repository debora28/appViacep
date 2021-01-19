import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import ListaHistorico from './pages/ListaHistorico';
import ResultadoBusca from './pages/ResultadoBusca';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes: () => React$Node = () => {
  const tabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ListaHistorico" component={ListaHistorico} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName="Home">
        <AppStack.Screen name="Home" component={tabs} />
        <AppStack.Screen name="ResultadoBusca" component={ResultadoBusca} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

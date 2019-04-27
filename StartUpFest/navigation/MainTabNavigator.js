import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeContainer from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';

const HomeStack = createStackNavigator({
    Home: HomeContainer,
  });
  
  HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios' ? 'ios-home' : 'md-home'
        }
      />
    ),
  };

  const ResultsStack = createStackNavigator({
    Results: ResultsScreen,
  });
  
  ResultsStack.navigationOptions = {
    tabBarLabel: 'Resultados',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'}
      />
    ),
  };

  export default createBottomTabNavigator({
    HomeStack,
    ResultsStack,
  });

import * as React from 'react';
import { View } from 'react-native';
import Welcome from './screens/Welcome'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import DietScreen from './screens/DietScreen'
import TalktoExpert from './screens/TalktoExpert'
import Recipes from './screens/Recipes'
import YogaPoses from './screens/Yoga'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Welcome:Welcome,
  HomeScreen: HomeScreen,
  DetailScreen:DetailScreen,
  DietScreen:DietScreen,
  TalktoExpert:TalktoExpert,
  Recipes:Recipes,
  YogaPoses:YogaPoses,
});

const AppContainer = createAppContainer(AppNavigator);

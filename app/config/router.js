import React from 'react';
import StackNavigator from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import FunFactsScreen from '../screens/FunFactsScreen';
import ProgressScreen from '../screens/ProgressScreen';
import MapScreen from '../screens/MapScreen';

export const Root = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Welcome: {
        screen: WelcomeScreen,
    },
    Main: {
        screen: MainScreen,
    },
    Map: {
        screen: MapScreen,
    },
    Progress: {
        screen: ProgressScreen,
    },
    Info: {
        screen: InfoScreen,
    },
    FunFacts: {
        screen: FunFactsScreen
    },
}, {
    initialRouteName: 'Home',
});


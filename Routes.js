import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from "./app/screens/HomeScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MainScreen from "./app/screens/MainScreen";
import MapScreen from "./app/screens/MapScreen";
import ProgressScreen from "./app/screens/ProgressScreen";
import InfoScreen from "./app/screens/InfoScreen";
import FunFactsScreen from "./app/screens/InfoScreen"


const AppNavigator = createStackNavigator({
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

export default createAppContainer(AppNavigator);
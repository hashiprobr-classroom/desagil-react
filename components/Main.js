import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { useTheme } from '@react-navigation/native';

import Icon from '@hashiprobr/react-native-paper-icon';

import Home from './home/Home';
import Search from './search/Search';
import Profile from './Profile';

const MaterialBottomTab = createMaterialBottomTabNavigator();

export default function Main(props) {
    const theme = useTheme();

    function homeIcon({ color }) {
        return <Icon name="home" color={color} />;
    }

    function searchIcon({ color }) {
        return <Icon name="magnify" color={color} />;
    }

    function profileIcon({ color }) {
        return <Icon name="account" color={color} />;
    }

    return (
        <MaterialBottomTab.Navigator initialRouteName="" screenOptions={theme.screenOptions}>
            <MaterialBottomTab.Screen name="Home" component={Home} options={{ tabBarIcon: homeIcon }} />
            <MaterialBottomTab.Screen name="Search" component={Search} options={{ tabBarIcon: searchIcon }} />
            <MaterialBottomTab.Screen name="Profile" component={Profile} options={{ tabBarIcon: profileIcon }} />
        </MaterialBottomTab.Navigator>
    );
}

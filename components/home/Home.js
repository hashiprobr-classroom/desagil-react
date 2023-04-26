import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useTheme } from '@react-navigation/native';

import History from './History';
import Restaurants from './Restaurants';

const MaterialTopTab = createMaterialTopTabNavigator();

export default function Home(props) {
    const theme = useTheme();

    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <MaterialTopTab.Navigator initialRouteName="" screenOptions={theme.screenOptions}>
                <MaterialTopTab.Screen name="History" component={History} />
                <MaterialTopTab.Screen name="Restaurants" component={Restaurants} />
            </MaterialTopTab.Navigator>
        </SafeAreaView>
    );
}

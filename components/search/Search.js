import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '@react-navigation/native';

import Categories from './Categories';
import Italian from './Italian';
import Japanese from './Japanese';

const Stack = createStackNavigator();

export default function Search(props) {
    const theme = useTheme();

    return (
        <Stack.Navigator initialRouteName="" screenOptions={theme.screenOptions}>
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Italian" component={Italian} />
            <Stack.Screen name="Japanese" component={Japanese} />
        </Stack.Navigator>
    );
}

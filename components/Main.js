import React from 'react';

import { View } from 'react-native';

import { Text } from 'react-native-paper';

export default function Main(props) {
    return (
        <View
            style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Abra Main.js para começar a trabalhar no seu app!</Text>
        </View>
    );
}

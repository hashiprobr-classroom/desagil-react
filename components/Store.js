import React from 'react';

import { View, Image } from 'react-native';

import { Text } from 'react-native-paper';

import styles from './Store.json';

export default function Store(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: props.image }} />
            <View style={styles.outer}>
                <Text variant="bodyMedium">{props.name}</Text>
                <View style={styles.inner}>
                    <Text variant="labelSmall" style={styles.rating}>★ {props.rating}</Text>
                    <Text variant="labelSmall"> • {props.category} • </Text>
                    <Text variant="labelSmall">{props.distance} km</Text>
                </View>
            </View>
            <Image style={styles.image} source={require('../assets/placeholder.png')} />
        </View>
    );
}

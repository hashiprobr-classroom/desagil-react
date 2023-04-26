import React from 'react';

import { View } from 'react-native';

import { Searchbar, Text } from 'react-native-paper';

import ChipBar from './ChipBar';
import Store from '../Store';

import styles from './Restaurants.json';

export default function Restaurants(props) {
    return (
        <View style={styles.container}>
            <ChipBar style={styles.chipbar} />
            <Searchbar style={styles.searchbar} />
            <Text variant="labelSmall" style={styles.title}>Stores</Text>
            <Store
                image="https://ensino.hashi.pro.br/desagil/aula/17/placeholder.png"
                name="Store 1"
                rating={4.5}
                category="Italian"
                distance={2.2}
            />
            <Store
                image="https://ensino.hashi.pro.br/desagil/aula/17/placeholder.png"
                name="Store 2"
                rating={3.2}
                category="Japanese"
                distance={0.5}
            />
            <Store
                image="https://ensino.hashi.pro.br/desagil/aula/17/placeholder.png"
                name="Store 3"
                rating={4.9}
                category="Desserts"
                distance={9.7}
            />
            <Store
                image="https://ensino.hashi.pro.br/desagil/aula/17/placeholder.png"
                name="Store 4"
                rating={1.5}
                category="Norwegian"
                distance={1.2}
            />
        </View>
    );
}

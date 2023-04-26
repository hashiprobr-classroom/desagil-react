import React from 'react';

import { View } from 'react-native';

import AspectImage from '@hashiprobr/react-native-aspect-image';

import { TouchableRipple, Text } from 'react-native-paper';

import ChipBar from './ChipBar';
import Store from '../Store';

import styles from './History.json';

function Item(props) {
    return (
        <TouchableRipple style={styles.item}>
            <>
                <AspectImage style={styles.itemImage} source={require('../../assets/placeholder.png')} />
                <Text style={styles.itemCaption} variant="labelSmall">{props.caption}</Text>
            </>
        </TouchableRipple>
    );
}

export default function History(props) {
    return (
        <View style={styles.container}>

            <ChipBar style={styles.chipbar} />

            <View style={styles.itemContainer}>
                <Item caption="Restaurants" />
                <Item caption="Market" />
                <Item caption="Pharmacy" />
                <Item caption="Pet" />
                <Item caption="Club" />
                <Item caption="Express" />
                <Item caption="Beverages" />
                <Item caption="Mall" />
            </View>

            <Text style={styles.title} variant="titleLarge">Stores</Text>

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

        </View>
    );
}

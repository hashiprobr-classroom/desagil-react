import React from 'react';

import { ScrollView, View, ImageBackground } from 'react-native';

import { Searchbar, Text } from 'react-native-paper';

import styles from './Categories.json';

function Category(props) {
    return (
        <View style={styles.category}>
            <ImageBackground style={styles.categoryImage} source={require('../../assets/placeholder.png')}>
                <Text variant="bodySmall" style={styles.categoryText}>{props.children}</Text>
            </ImageBackground >
        </View >
    );
}

export default function Categories(props) {
    return (
        <ScrollView style={styles.container}>
            <Searchbar style={styles.searchbar} />
            <View style={styles.categoryContainer}>
                <Category>Italian</Category>
                <Category>Japanese</Category>
                <Category>Desserts</Category>
                <Category>Norwegian</Category>
                <Category>???</Category>
                <Category>???</Category>
                <Category>???</Category>
                <Category>???</Category>
                <Category>???</Category>
                <Category>???</Category>
                <Category>???</Category>
            </View>
        </ScrollView>
    );
}

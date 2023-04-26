import React from 'react';

import { ScrollView } from 'react-native';

import { Chip } from 'react-native-paper';

import styles from './ChipBar.json';

export default function ChipBar(props) {
    return (
        <ScrollView style={props.style} horizontal={true}>
            <Chip style={styles.chip} icon="chevron-down">Sort</Chip>
            <Chip style={styles.chip} icon="walk">Take home</Chip>
            <Chip style={styles.chip}>Free delivery</Chip>
            <Chip style={styles.chip} icon="chevron-down">Voucher</Chip>
            <Chip style={styles.chip} icon="chevron-down">Distance</Chip>
            <Chip style={styles.chip}>Partner Delivery</Chip>
            <Chip style={styles.chip} icon="filter-variant">Filters</Chip>
        </ScrollView>
    );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider } from 'react-native-paper';

import Main from './components/Main';

export default function App() {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider>
    );
}

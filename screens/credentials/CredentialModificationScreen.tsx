import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import * as Storage from '../../functions/storage';
import { useLayoutEffect } from 'react';

const CredentialModification = () => {

    const navigation = useNavigation(); // enable navigation

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: true,
        });
    }, [navigation]);

    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.headerText}>Credential Modification Screen</Text>
        </SafeAreaView>
    );
}

export default CredentialModification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyText: {
        color: 'white',
        fontSize: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
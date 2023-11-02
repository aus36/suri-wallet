// welcome to the playground everybody
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import CredentialCard from '../components/CredentialCard';

const Dev = () => {

    const navigation = useNavigation(); // enable navigation

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: false,
        });
    }, [navigation]);

    const testData = [ // sample data, actual data will come from sigchain
        {
            platform: 'Twitter',
            date: '01/01/2021',
        },
        {
            platform: 'Github',
            date: '01/01/2021',
        },
        {
            platform: 'Steam',
            date: '01/01/2021',
        },
    ];

    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.headerText}>Dev Screen</Text>
            <CredentialCard credential={testData[1]}/>
            <TouchableOpacity style = {styles.actionButton} onPress={() => {}}>
                <Text style = {styles.bodyText}>Big Green Button</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Dev;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
        alignItems: 'center',
        justifyContent: 'center',
        },
    headerText: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
        },
    bodyText: {
        color: "white",
        fontSize: 24,
        },
    actionButton: {
        backgroundColor: "green",
        width : 200,
        height: 50,
        margin: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        },
});
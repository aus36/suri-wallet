// welcome to the playground everybody
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import CredentialCard from '../components/CredentialCard';
// @ts-ignore
import * as Storage from '../functions/storage.ts';
// @ts-ignore
import * as DID from '../functions/did.ts';

const Dev = () => {

    const navigation = useNavigation(); // enable navigation

    const [testState, setTestState] = useState<any>(); // useState for testing various stuff

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: true,
        });
    }, [navigation]);

    async function handleBigGreenButton() {
        Storage.clearUsers();
    }

    const testData = [ // sample data, actual data will come from sigchain
        {
            service: 'Twitter',
            date: '01/01/2021',
        },
    ];

    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.headerText}>Dev Screen</Text>
            <Text style = {styles.headerText}>{JSON.stringify(testState, null, 2) || "test data appears here"}</Text>
            <CredentialCard credential={testData[0]}/>
            <TouchableOpacity style = {styles.actionButton} onPress={() => {handleBigGreenButton()}}>
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
        marginVertical: 20,
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
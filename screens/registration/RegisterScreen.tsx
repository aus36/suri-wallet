import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
//@ts-ignore
import  { createDidDoc } from '../../functions/did.ts';

const Register = () => {

    const navigation = useNavigation(); // enable navigation

    const [URL, setURL] = useState<string>('');
    const [name, setName] = useState<string>('');

    const keyPair = { //TODO: actually generate keypair using crypto
        publicKey: "12309123810230",
        privateKey: "12309123810230"
    }

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: true,
        });
    }, [navigation]);

    function handleCreate() {
        if(URL !== '' && name !== '') {
            let didDoc = createDidDoc(name, URL);
            // @ts-ignore
            navigation.navigate('RegisterResults', {didDoc: didDoc});
        }
        else {
            alert('Please fill out all fields');
        }
    }

    return (
        <View style = {styles.container}>
            {/*Header*/}
            <Text style = {styles.text}>Enter your info below to create your DID</Text>
            {/*Inputs*/}
            <TextInput
                style = {styles.input}
                placeholder='DID URL'
                placeholderTextColor="grey"
                onChange={(e) => {setURL(e.nativeEvent.text)}}
            />
            <TextInput
                style = {styles.input}
                placeholder='Display Name'
                placeholderTextColor="grey"
                onChange={(e) => {setName(e.nativeEvent.text)}}
            />
            {/*Submit Button*/}
            <TouchableOpacity style = {styles.submitButton} onPress={handleCreate}>
                <Text style = {styles.text}>Create DID</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141414',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    inputs: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        color: 'white',
        borderRadius: 15,
    },
    submitButton: {
        backgroundColor: 'grey',
        width: 120,
        height: 40,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
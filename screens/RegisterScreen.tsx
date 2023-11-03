//@ts-ignore
import { createDidDoc, createGenesisBlock } from "../functions/did.ts"
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAuth from '../hooks/useAuth';

const Register = () => {

    const navigation = useNavigation(); // enable navigation
    const { register } = useAuth(); // enable auth functionality

    const [URL, setURL] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [pin, setPin] = useState<string>('');

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: true,
        });
    }, [navigation]);

    function handleCreate() {

        if(URL !== '' && name !== '' && bio !== '' && pin !== '' && pin.length === 4) {
            const starterSigchain = [];
            const didDoc = createDidDoc(name, URL);

            const sampleUser = {
                displayName: name,
                did: didDoc.id,
                bio: bio,
                pin: pin,
                sigchain: starterSigchain.push(createGenesisBlock()),
            }
            // @ts-ignore – this line may be broken
            register(sampleUser);
            // @ts-ignore
            navigation.navigate('Login');
        }
        else {
            alert('Fill out all fields, and make sure pin is 4 digits');
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
            <TextInput
                style = {styles.input}
                placeholder='Bio'
                placeholderTextColor="grey"
                onChange={(e) => {setBio(e.nativeEvent.text)}}
            />
            <TextInput
                style = {styles.input}
                placeholder='4 Digit Pin'
                placeholderTextColor="grey"
                onChange={(e) => {setPin(e.nativeEvent.text)}}
                keyboardType="numeric"
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
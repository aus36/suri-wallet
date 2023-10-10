import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = () => {

    const navigation = useNavigation(); // enable navigation

    const [URL, setURL] = useState<string>('');
    const [name, setName] = useState<string>('');

    React.useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: true,
        });
    }, [navigation]);

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Enter your info below to create your DID</Text>
            <TextInput 
                style = {styles.input}
                placeholder='DID URL'
                placeholderTextColor="grey"
                onChange={() => {}}
            />
            <TextInput 
                style = {styles.input}
                placeholder='Display Name'
                placeholderTextColor="grey"
                onChange={() => {}}
            />
            <TouchableOpacity style = {styles.submitButton}>
                <Text style = {styles.text}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
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
        width: 90,
        height: 40,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
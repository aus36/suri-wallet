import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React from 'react';

const Register = () => {

    const navigation = useNavigation(); // enable navigation

    React.useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Register Screen</Text>
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
    }
  });
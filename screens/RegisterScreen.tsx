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
            <Text>Register Screen</Text>
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
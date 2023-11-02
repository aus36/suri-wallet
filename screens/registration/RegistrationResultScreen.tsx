import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState, useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

// @ts-ignore
const RegistrationResultScreen = ({route}) => {
    
    const navigation = useNavigation();

    const { didDoc, SCVP } = route.params;

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: true,
        });
    }, [navigation]);
    
    return (
        <View style={styles.container}>
            <Text style={styles.bodyText}>Your DID Document: </Text>
        </View>
    );
};

export default RegistrationResultScreen;

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
  });
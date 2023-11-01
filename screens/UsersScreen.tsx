import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import { useLayoutEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const Users = () => {
    
        const navigation = useNavigation(); // enable navigation

        useLayoutEffect(() => { // disable header
            navigation.setOptions({
                headerShown: false,
                gestureEnabled: false,
            });
        }, [navigation]);

        function handlePress() {
            // @ts-ignore
            navigation.navigate('Login');
        }
    
        return (
            <View style = {styles.container}>
               <Text style = {styles.headerText}>Users Screen</Text>
               <TouchableOpacity style = {styles.actionButton} onPress={() => {handlePress()}}>
                    <Text style = {styles.bodyText}>go next</Text>
               </TouchableOpacity>
            </View>
        );
    }

export default Users;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
        fontSize: 36,
        color: 'white',
        marginBottom: 50,
    },
    bodyText: {
        fontSize: 24,
        color: 'white',
    },
    actionButton: {
        backgroundColor: '#1C1C1C',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
});
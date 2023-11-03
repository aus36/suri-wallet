import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import { useLayoutEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const Users = () => {
    
        const navigation = useNavigation(); // enable navigation

        const { currentUser } = useAuth(); // enable auth functionality

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
            <SafeAreaView style = {styles.container}>
               <Text style = {styles.headerText}>Users Screen</Text>
               <TouchableOpacity style = {styles.actionButton} onPress={() => {handlePress()}}>
                    <Text style = {styles.bodyText}>Skip Screen</Text>
               </TouchableOpacity>
               <TouchableOpacity // @ts-ignore 
                    onPress={() => navigation.navigate('Register')}
                    style = {styles.registerButton}>
                    <Text style = {styles.registerButtonText}>Don't have an account? Tap here.</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

export default Users;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141414',
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
    registerButton: {
        position: 'absolute',
        bottom: 50,
      },
      registerButtonText: {
        color: 'white',
        fontSize: 20,
      },
});
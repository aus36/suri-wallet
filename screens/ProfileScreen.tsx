import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAuth from '../hooks/useAuth';

const Profile = () => {

    const navigation = useNavigation(); // enable navigation
    const { user, logout } = useAuth(); // enable auth functionality

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: false,
        });
    }, [navigation]);

    return (
        <View style = {styles.container}>
            {/*Profile Logo*/}
            <AntDesign name="user" size={36} color="white" style = {styles.profileLogo}/>
            {/*Header*/}
            {/* @ts-ignore */}
            <Text style = {styles.headerText}>{user.displayName}</Text>
            {/*Buttons*/}
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>View SCVP</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>Update Info</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>Change Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>Change Name</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileLogo: {
        borderWidth: 1,
        borderRadius: 35,
        borderColor: 'white',
        padding: 15,
        marginBottom: 30,
    },
    bodyText: {
        color: 'white',
        fontSize: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    actionButton: {
        width: 160,
        height: 60,
        margin: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
  });
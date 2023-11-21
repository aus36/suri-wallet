//@ts-ignore
import * as Storage from "../functions/storage.ts"
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAuth from '../hooks/useAuth';
import CredentialCard from '../components/CredentialCard';

const Profile = () => {

    const navigation = useNavigation(); // enable navigation
    const { currentUser } = useAuth(); // enable auth functionality

    const [sigchain, setSigchain] = useState<Array<Object>>([]); // TODO: replace with actual data from sigchain

    const [data, setData] = useState<Array<Object>>([]); // TODO: replace with actual data from sigchain

    const testData = [ // sample data, actual data will come from sigchain
        {
            service: 'Twitter',
            date: '01/03/2021',
        },
        {
            service: 'Github',
            date: '02/01/2021',
        },
        {
            service: 'StackOverflow',
            date: '05/05/2021',
        },
        {
            service: "Facebook",
            date: "02/03/2022",
        },
        {
            service: "Instagram",
            date: "03/05/2022",
        },
        {
            service: "Reddit",
            date: "04/06/2022",
        },
        {
            service: "LinkedIn",
            date: "05/07/2022",
        },
        {
            service: "Discord",
            date: "06/08/2022",
        },
    ];

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: false,
        });
    }, [navigation]);

    useEffect(() => {
            setData(testData);
        },[]);

    useEffect(() => { // useEffect to get sigchain from storage upon first screen load
        async () => {
            const user = await Storage.getUser(currentUser);
            setSigchain(user.sigchain);
        }
    },[]);

    return (
        <SafeAreaView style = {styles.container}>
            {/*Profile Logo*/}
            <AntDesign name="user" size={36} color="white" style = {styles.profileLogo}/>

            {/*Header*/}
            {/* @ts-ignore */}
            <Text style = {styles.headerText}>{currentUser || "No display name"}</Text>

            {/*Buttons*/}
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.actionButton} onPress={() => {}}>
                    <Text style = {styles.bodyText}>Export Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>Update Info</Text>
                </TouchableOpacity>
            </View>

            {/* Gradient container with either list of credentials or none found text */}
            <View style = {styles.credentialContainer}>
            {(data.length > 0) ? (
                <FlatList data = {testData} numColumns={1} style = {styles.scrollContainer} renderItem={ ({item}) => <CredentialCard credential={item}/>}/>
                ) : (
                <Text style = {styles.bodyText}>No Credentials Found</Text>
                )
            }
            </View>
        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#303030",
      alignItems: 'center',
      justifyContent: 'center',
    },
    credentialContainer: {
        height: 550,
        width: 360,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#555555',
        borderRadius: 30,
        padding: 15,
        marginTop: 20,
    },
    scrollContainer: {
        paddingVertical: 10,
        height: "100%",
        width: "100%",
        borderRadius: 20,
    },
    profileLogo: {
        borderWidth: 1,
        borderRadius: 35,
        borderColor: 'white',
        padding: 15,
        marginBottom: 20,
    },
    bodyText: {
        color: 'white',
        fontSize: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    actionButton: {
        backgroundColor: '#555555',
        marginTop: 10,
        width: 160,
        borderRadius: 40,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
    },
  });
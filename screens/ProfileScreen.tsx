//@ts-ignore
import * as Storage from "../functions/storage.ts"
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useLayoutEffect, useState } from 'react';
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

    function handleAddIdentity() {
        // @ts-ignore
        navigation.navigate('NewCredential');
    }

    return (
        <SafeAreaView style = {styles.container}>
            {/* Profile container */}
            <View style = {styles.headerContainer}>
                {/*Profile Logo*/}
                <Image source={require('../assets/blankpfp.png')} style={styles.profileLogo}/>

                {/*Header*/}
                {/* @ts-ignore */}
                <Text style = {styles.headerText}>{currentUser || "No display name"}</Text>

                {/*Buttons*/}
                <View style = {styles.row}>
                    <TouchableOpacity style = {styles.actionButton} onPress={() => {handleAddIdentity()}}>
                        <Text style = {styles.buttonText}>Add Identity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.actionButton}>
                        <Text style = {styles.buttonText}>Update Info</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Credential Container */}
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
    headerContainer: {
        height: "30%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    credentialContainer: {
        height: "70%",
        width: "82%",
        maxWidth: 350,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    scrollContainer: {
        height: "100%",
        width: "100%",
        borderRadius: 20,
    },
    profileLogo: {
        borderRadius: 999,
        height: 90,
        width: 90,
        marginBottom: 15,
    },
    bodyText: {
        color: 'white',
        fontSize: 20,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    actionButton: {
        backgroundColor: 'white',
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
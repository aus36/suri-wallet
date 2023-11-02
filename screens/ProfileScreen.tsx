import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAuth from '../hooks/useAuth';
import { LinearGradient } from 'expo-linear-gradient';
//@ts-ignore
import * as Sigchain from "../functions/did.ts"

const Profile = () => {

    const navigation = useNavigation(); // enable navigation
    const { currentUser } = useAuth(); // enable auth functionality

    const [sigchain, setSigchain] = useState<Array<Object>>([]); // TODO: replace with actual data from sigchain

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: false,
        });
    }, [navigation]);

    return (
        <SafeAreaView style = {styles.container}>
            {/*Profile Logo*/}
            <AntDesign name="user" size={36} color="white" style = {styles.profileLogo}/>

            {/*Header*/}
            {/* @ts-ignore */}
            <Text style = {styles.headerText}>{currentUser}</Text>

            {/*Buttons*/}
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.actionButton} onPress={() => {}}>
                    <Text style = {styles.bodyText}>Export Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>Update Info</Text>
                </TouchableOpacity>
            </View>

            {/*Sigchain Display*/}
            <LinearGradient start = {{x: 0, y: 0}} colors={["#4C4C4C", "#1F1F1F"]} style = {styles.gradientContainer}>
                {sigchain.toString() !== "" ? (
                    <ScrollView style = {styles.scrollContainer}>
                        <Text style = {styles.bodyText}>
                            {sigchain.toString()}
                        </Text>
                    </ScrollView>
                ) : (
                    <Text style={styles.bodyText}>No sigchain found</Text>
                )}
            </LinearGradient>
        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#141414",
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradientContainer: {
        height: 550,
        width: 360,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 15,
        marginTop: 20,
    },
    scrollContainer: {
        marginVertical: 10,
        height: "100%",
        width: "100%",
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
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
        backgroundColor: '#2F2F2F',
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
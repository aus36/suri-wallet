import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useAuth from '../hooks/useAuth';

const Home = () => {

    const navigation = useNavigation(); // enable navigation
    const { user, logout } = useAuth(); // enable auth functionality


    React.useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: false,
        });
    }, [navigation]);

    function handleLogout() {
        logout();
        // @ts-ignore
        navigation.navigate('Login');
    }

    return (
        <View style = {styles.container}>
            <AntDesign name="user" size={36} color="white" style = {styles.profileLogo}/>
            <Text style = {styles.headerText}>Profile Screen</Text>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>View SCVP</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>Verify Social</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>Delete Social</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>Update Info</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.row}>
                <TouchableOpacity style = {styles.actionButton}>
                    <Text style = {styles.bodyText}>Change Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.logoutButton} onPress={handleLogout}>
                    <Text style = {styles.bodyText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileLogo: {
        position: 'absolute',
        top: 50,
        right: 15,
        borderWidth: 1,
        borderRadius: 35,
        borderColor: 'white',
        padding: 15,
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
    logoutButton: {
        width: 160,
        height: 60,
        margin: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButtonText: {
        color: 'red',
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
    },
  });
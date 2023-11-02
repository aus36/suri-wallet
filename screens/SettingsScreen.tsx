import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import { useLayoutEffect } from 'react';

const Settings = () => {

    const navigation = useNavigation(); // enable navigation
    const { logout } = useAuth(); // enable auth functionality

    //disable header/gestures
    useLayoutEffect(() => {
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
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.headerText}>Settings Screen</Text>
            <TouchableOpacity style = {styles.logoutButton} onPress={handleLogout}>
                <Text style = {styles.bodyText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    bodyText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    actionButton: {
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
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
});
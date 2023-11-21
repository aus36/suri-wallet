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
        navigation.navigate('Users');
    }

    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.headerText}>Settings</Text>
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
        backgroundColor: '#303030',
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
        width: 130,
        height: 50,
        margin: 15,
        borderRadius: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
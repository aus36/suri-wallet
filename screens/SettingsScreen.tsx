import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import { useLayoutEffect } from 'react';

const Settings = () => {

    const navigation = useNavigation(); // enable navigation
    const { user } = useAuth(); // enable auth functionality

    //disable header/gestures
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: false,
        });
    }, [navigation]);

    return (
        <View style = {styles.container}>
            <Text style = {styles.headerText}>Settings Screen</Text>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
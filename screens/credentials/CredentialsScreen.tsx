import { Text, View, StyleSheet, ScrollView, Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Credentials = () => {

    const navigation = useNavigation(); // enable navigation
    const { user } = useAuth(); // enable auth functionality

    //disable header/gestures
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: false,
        });
    }, [navigation]);

    function handleAddCredential() {
        // @ts-ignore
        navigation.navigate('NewCredential');
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.headerText}>Credentials Screen</Text>
            {/* <ScrollView style = {styles.scrollContainer}>
            </ScrollView> */}
            <TouchableOpacity style = {styles.addButton} onPress={handleAddCredential}>
                <Text style = {styles.plus}>+   </Text>
                <Text style = {styles.bodyText}>Add Credential</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Credentials;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        flexDirection: 'column',
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bodyText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    plus: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addButton: {
        flexDirection: 'row',
        width: 200,
        height: 60,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
import { SafeAreaView, Text, View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import CredentialCard from '../../components/CredentialCard';
import UserCard from '../../components/UserCard';

const Credentials = () => {

    const navigation = useNavigation(); // enable navigation

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

    useEffect(() => {
        setData(testData);
    },[]);

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
        <SafeAreaView style = {styles.container}>
            {/* Header */}
            <Text style = {styles.headerText}>Connections</Text>

            {/* Gradient container with either list of credentials or none found text */}
            <LinearGradient start = {{x: 0, y: 0}} colors={["#4C4C4C", "#1F1F1F"]} style = {styles.gradientContainer}>
                <FlatList
                    numColumns={1}
                    style = {styles.scrollContainer}
                    data = {data}
                    renderItem = {({item}) => <CredentialCard credential={item} />}
                    keyExtractor = {(item, index) => index.toString()}
                    ListEmptyComponent = {() => <Text style = {styles.bodyText}>No Connections Found</Text>}
                />
            </LinearGradient>

            {/* Add Credential Button */}
            <TouchableOpacity style = {styles.addButton} onPress={handleAddCredential}>
                <Text style = {styles.bodyText}>New Connection</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Credentials;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradientContainer: {
        height: 650,
        width: 380,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 15,
    },
    scrollContainer: {
        marginVertical: 10,
        height: "100%",
        width: "100%",
        borderRadius: 16,
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    bodyText: {
        fontSize: 18,
        color: 'white',
    },
    addButton: {
        backgroundColor: '#2F2F2F',
        marginTop: 10,
        width: 180,
        borderRadius: 40,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
import { SafeAreaView, Text, View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import { useEffect, useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import CredentialCard from '../../components/CredentialCard';

const Credentials = () => {

    const navigation = useNavigation(); // enable navigation
    const { currentUser } = useAuth(); // enable auth functionality

    const [data, setData] = useState<Array<Object>>([]); // TODO: replace with actual data from sigchain

    const testData = [ // sample data, actual data will come from sigchain
        {
            platform: 'Twitter',
            date: '01/03/2021',
        },
        {
            platform: 'Github',
            date: '02/01/2021',
        },
        {
            platform: 'Steam',
            date: '05/05/2021',
        },
        {
            platform: "Facebook",
            date: "02/03/2022",
        },
        {
            platform: "Instagram",
            date: "03/05/2022",
        },
        {
            platform: "Reddit",
            date: "04/06/2022",
        },
        {
            platform: "Twitch",
            date: "05/07/2022",
        },
        {
            platform: "Discord",
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
            <LinearGradient start = {{x: 0, y: 0}} colors={["#4C4C4C", "#1F1F1F"]} style = {styles.gradientContainer}>
            {/* Conditional Rendering to show list of credentials or text if none found */}
            {(data.length > 0) ? (
                <FlatList data = {testData} numColumns={1} style = {styles.scrollContainer} renderItem={ ({item}) => <CredentialCard credential={item}/>}/>
                ) : (
                <Text style = {styles.bodyText}>No Credentials Found</Text>
                )    
            }
            </LinearGradient>
            {/* Add Credential Button */}
            <TouchableOpacity style = {styles.addButton} onPress={handleAddCredential}>
                <Text style = {styles.bodyText}>New Credential</Text>
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
        height: 700,
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
        // borderColor: 'white',
        // borderRadius: 20,
        // borderWidth: 1,
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
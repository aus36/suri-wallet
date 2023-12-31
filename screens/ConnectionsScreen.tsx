import { SafeAreaView, Text, View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ConnectionCard from '../components/ConnectionCard';
import useAuth from '../hooks/useAuth';

const Credentials = () => {

    const navigation = useNavigation(); // enable navigation

    const {currentUser} = useAuth();

    const [data, setData] = useState<Array<Object>>([]); // TODO: replace with actual data from sigchain

    const testConnections = [ // sample data, actual data will come from sigchain
        {
            displayName: 'Bobby Jones',
            displayImagePath: '',
        },
        {
            displayName: 'Billy Thompson',
            displayImagePath: '',
        },
        {
            displayName: 'John Smith',
            displayImagePath: '',
        },
        {
            displayName: "Alice Johnson",
            displayImagePath: "",
        },
        {
            displayName: "X Æ A-12",
            displayImagePath: "",
        },
        {
            displayName: "George Washington",
            displayImagePath: "",
        },
        {
            displayName: "Zachary Taylor",
            displayImagePath: "",
        },
        {
            displayName: "Yoda",
            displayImagePath: "",
        },
    ];

    useEffect(() => {
        setData(testConnections);
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
            <Text style = {styles.headerText}>{currentUser || "Connections"}</Text>
            <View style = {styles.row}>
                <TouchableOpacity onPress={() => {}} style = {styles.headerButton}>
                    <Text style = {styles.headerButtonText}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style = {styles.headerButton}>
                    <Text style = {styles.headerButtonText}>Following</Text>
                </TouchableOpacity>
            </View>

            {/* Gradient container with either list of credentials or none found text */}
            <View style = {styles.connectionContainer}>
                <FlatList
                    numColumns={1}
                    style = {styles.scrollContainer}
                    data = {data}
                    renderItem = {({item}) => <ConnectionCard connection={item} />}
                    keyExtractor = {(item, index) => index.toString()}
                    ListEmptyComponent = {() => <Text style = {styles.bodyText}>No Connections Found</Text>}
                />
            </View>

            {/* Add Credential Button */}
            <TouchableOpacity style = {styles.addButton} onPress={handleAddCredential}>
                <Text style = {styles.buttonText}>New Connection</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Credentials;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
        alignItems: 'center',
        justifyContent: 'center',
    },
    connectionContainer: {
        height: "80%",
        maxHeight: 650,
        width: "90%",
        maxWidth: 380,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
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
    buttonText: {
        fontSize: 18,
        color: 'black',
    },
    addButton: {
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerButton: {
        backgroundColor: 'white',
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    headerButtonText: {
        fontSize: 18,
        color: 'black',
    },
});
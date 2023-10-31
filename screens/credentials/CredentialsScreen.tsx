import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import { useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import CredentialCard from '../../components/CredentialCard';

const Credentials = () => {

    const navigation = useNavigation(); // enable navigation
    const { user } = useAuth(); // enable auth functionality

    const [data, setData] = useState([]); // TODO: replace with actual data from sigchain

    const sampleData = [ // sample data, actual data will come from sigchain
        {
            id: '1',
            platform: 'Sample Credential 1',
            issuer: 'Sample Issuer 1',
            date: '01/01/2021',
            expirationDate: '01/01/2022',
        },
        {
            id: '2',
            platform: 'Sample Credential 2',
            issuer: 'Sample Issuer 2',
            date: '01/01/2021',
            expirationDate: '01/01/2022',
        },
        {
            id: '3',
            platform: 'Sample Credential 3',
            issuer: 'Sample Issuer 3',
            date: '01/01/2021',
            expirationDate: '01/01/2022',
        },
    ];

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
            {/* Conditional Rendering to show list of credentials or text if none found */}
            {(data.length > 0) ? (
                <FlatList data = {sampleData} numColumns={1} style = {styles.scrollContainer} renderItem={ ({item}) => <CredentialCard  
                credentialID = {item.id}
                platform = {item.platform}
                issuer = {item.issuer}
                date = {item.date}
                expirationDate = {item.expirationDate}
                />}/>
                ) : (
                <Text style = {styles.bodyText}>No Credentials Found</Text>
                )    
            }
            <TouchableOpacity style = {styles.addButton} onPress={handleAddCredential}>
                <LinearGradient start = {{x: 0, y: 0}} colors={["#4C4C4C", "#111111"]} style = {styles.gradientContainer}>
                    <Text style = {styles.plus}>+   </Text>
                    <Text style = {styles.bodyText}>Add Credential</Text>
                </LinearGradient>
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
    gradientContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 200,
        borderRadius: 30,
    },
    scrollContainer: {
        width: 350,
        borderColor: 'white',
        borderWidth: 1,
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
        marginTop: 20,
        width: "auto",
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
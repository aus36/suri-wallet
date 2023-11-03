import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// @ts-ignore
import * as Storage from "../functions/storage.ts"
// @ts-ignore
import UserCard from '../components/UserCard.tsx';

const Users = () => {

        const [users, setUsers] = useState<Array<Object>>([]);
    
        const navigation = useNavigation(); // enable navigation

        useLayoutEffect(() => { // disable header
            navigation.setOptions({
                headerShown: false,
                gestureEnabled: false,
            });
        }, [navigation]);

        function handlePress() {
            // @ts-ignore
            navigation.navigate('Login');
        }

        useEffect(() => { // useEffect to initialize users list
            const usersList = async () => JSON.parse(await Storage.getItem("users") || "[]");
            usersList().then((usersList) => setUsers(usersList));
        },[]);
    
        return (
            <SafeAreaView style = {styles.container}>
                {/* Header */}
               <Text style = {styles.headerText}>Users</Text>
               
               {/* Users Display */}
                <LinearGradient start = {{x: 0, y: 0}} colors={["#4C4C4C", "#1F1F1F"]} style = {styles.gradientContainer}>
                    <FlatList style = {styles.scrollContainer}
                        data={users}
                        renderItem={({ item }) => (
                            <UserCard user={item} />
                        )}
                    />
                </LinearGradient>

                {/* Skip Button */}
               <TouchableOpacity style = {styles.actionButton} onPress={() => {handlePress()}}>
                    <Text style = {styles.bodyText}>Skip</Text>
               </TouchableOpacity>

               {/* Register Button */}
               <TouchableOpacity // @ts-ignore
                    onPress={() => navigation.navigate('Register')}
                    style = {styles.registerButton}>
                    <Text style = {styles.registerButtonText}>Don't have an account? Tap here.</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

export default Users;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141414',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradientContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 360,
        height: 400,
        marginBottom: 30,
        borderRadius: 30,
    },
    scrollContainer: {
        width: 350,
        height: 400,
    },
    headerText: {
        fontSize: 36,
        color: 'white',
        marginBottom: 50,
    },
    bodyText: {
        fontSize: 24,
        color: 'white',
    },
    actionButton: {
        backgroundColor: '#1C1C1C',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    registerButton: {
        position: 'absolute',
        bottom: 50,
      },
      registerButtonText: {
        color: 'white',
        fontSize: 20,
      },
});
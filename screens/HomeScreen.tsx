import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React from 'react';

const Home = () => {

    const navigation = useNavigation(); // enable navigation

    React.useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style = {styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
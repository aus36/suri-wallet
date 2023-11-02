import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../hooks/useAuth';
import React, { useState, useMemo } from 'react';
import { AntDesign } from '@expo/vector-icons';

const Login = () => {

  const navigation = useNavigation(); // enable navigation
  const { currentUser, login } = useAuth(); // enable user functionality

  const [pin, setPin] = useState('');
  const [displayPin, setDisplayPin] = useState('');

  React.useLayoutEffect(() => { // disable header
    navigation.setOptions({
      headerShown: false,
      gestureEnabled: false,
    });
  }, [navigation]);

  useMemo(() => { // useMemo to make sure only the last character of the pin is visible
    if (!pin || pin.length === 0){
      setDisplayPin('_');
    }
    else {
      const lastChar = pin.charAt(pin.length - 1);
      setDisplayPin('*'.repeat(pin.length - 1) + lastChar);
    }
  },[pin]);

  function handlePress(num: string) { // function for pressing pin buttons
    if (pin.length < 4) {
      setPin(pin + num);
    }
  }

  function handleLogin() { // TODO: implement proper pin auth
    login(pin, "test");
    
    if (pin === '1234') {
      setPin(''); // clear pin if successful login
      // @ts-ignore
      navigation.navigate('Tabs');
    }
    else if (pin === '9999') { // TODO: remove this once we're done testing
      setPin('');
      // @ts-ignore
      navigation.navigate('Dev');
    }
    else {
      alert("Incorrect PIN");
    }
  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
      {/* @ts-ignore */}
      <TouchableOpacity style = {styles.backButton} onPress = {() => navigation.navigate("Users")}>
        <AntDesign name="back" size={24} color="white" />
      </TouchableOpacity>
      {/* Logo */}
      <Image source={require('../assets/SURI-logo.png')} style={styles.logo}/>
      <LinearGradient start = {{x: 0, y: 0}} colors={["#4C4C4C", "#111111"]} style = {styles.gradientContainer}>
        {/* Pin display */}
        <View>
          <Text style = {styles.displayPin}>{displayPin}</Text>
        </View>
        {/* Pinpad */}
        <View style = {styles.pinPad}>
          <View style={styles.pinRow}>
            <TouchableOpacity onPress={() => handlePress("1")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("2")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("3")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.pinRow}>
            <TouchableOpacity onPress={() => handlePress("4")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("5")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("6")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.pinRow}>
            <TouchableOpacity onPress={() => handlePress("7")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("8")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("9")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>9</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Buttons */}
        <View style={styles.pinRow}>
          <TouchableOpacity // @ts-ignore 
            onPress={() => {handleLogin();}}
            style = {styles.loginButton}>
            <Text style = {styles.actionButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPin(pin.slice(0, -1))}
            style = {styles.deleteButton}>
            <Text style = {styles.actionButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

export default Login;

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
    borderRadius: 30,
    padding: 15,
  },
  logo: {
    height: 200,
    width: 350,
  },
  pinPad: {
    marginBottom: 0,
  },
  loginButton: {
    backgroundColor:'grey',
    width : 90,
    height: 40,
    margin: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: "red",
    width : 90,
    height: 40,
    margin: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 20,
  },
  pinButton: {
    height: 80,
    width: 80,
    borderColor: 'white',
    borderWidth: 1,
    margin: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinButtonText: {
    color: 'white',
    fontSize: 40,
  },
  pinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  displayPin: {
    color: 'white',
    fontSize: 40,
  },
  backButton: {
    top: 50,
    left: 10,
    position: 'absolute',
    width: 60,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
},
});
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../hooks/useAuth';
import React, { useState, useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';


const Login = () => {

  const navigation = useNavigation(); // enable navigation
  const { currentUser, setCurrentUser, login } = useAuth(); // enable user functionality

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

  function handlePress(entry: string) { // function for pressing pin buttons
    if (pin.length < 4 && entry.length === 1) {
      setPin(pin + entry);
    }
    else if(entry === "backspace") {
      setPin(pin.slice(0, -1));
    }
    else if(entry === "enter") {
      handleLogin();
    }
  }

  function handleLogin() { // function for login button
    // if(login(pin)) {
    //   setPin('');
    //   // @ts-ignore
    //   navigation.navigate('Tabs');
    // }

    login(pin);

    if (pin === '1234') { // TODO: remove this code once login is done
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
      alert("Incorrect PIN for " + currentUser);
    }
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/suriLogo-white.png')} style={styles.logo}/>
      
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
          <View style={styles.pinRow}>
            <TouchableOpacity onPress={() => handlePress("backspace")} style={styles.altPinButton}>
              <Ionicons name="backspace-outline" size={36} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("0")} style={styles.pinButton}>
              <Text style = {styles.pinButtonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("enter")} style={styles.altPinButton}>
              <Ionicons name="enter-outline" size={36} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      {/* Switch User Button */}
      {/* @ts-ignore */}
      <TouchableOpacity style = {styles.switchUserButton} onPress={() => {navigation.navigate("Users"); setCurrentUser("")}}>
        <Text style = {styles.buttonText}>Switch User</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 300,
    resizeMode: 'contain',
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
    height: 90,
    width: 90,
    margin: 10,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#606060',
  },
  altPinButton: {
    height: 90,
    width: 90,
    margin: 10,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'black',
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
    marginBottom: 20,
  },
  switchUserButton: {
    marginTop: 20,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
},
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  bodyText: {
    color: 'white',
    fontSize: 20,
  },
});
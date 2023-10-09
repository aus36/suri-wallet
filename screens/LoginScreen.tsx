import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../hooks/useAuth';
import React, { useState, useMemo } from 'react';

const Login = () => {

  const navigation = useNavigation(); // enable navigation
  const { user, login, register  } = useAuth(); // enable user functionality

  const [pin, setPin] = useState('');
  const [displayPin, setDisplayPin] = useState('');

  React.useLayoutEffect(() => { // disable header
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useMemo(() => {
    if (!pin || pin.length === 0){
      setDisplayPin('');
    }
    else {
      const lastChar = pin.charAt(pin.length - 1);
      setDisplayPin('*'.repeat(pin.length - 1) + lastChar);
    }
  },[pin]);

  function handlePress(num: string) {
    if (pin.length < 4) {
      setPin(pin + num);
    }
  }

  function handleLogin() { // TODO: implement proper pin auth
    login(pin);
    
    if (pin === '1234') {
      // @ts-ignore
      navigation.navigate('Home');
    }
    else {
      alert("Incorrect PIN");
    }
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style = {styles.logo}>SURI Wallet</Text>
      {/* Pin display */}
      <View style={styles.pinDisplay}>
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
          onPress={() => handleLogin()}
          style = {styles.loginButton}>
          <Text style = {styles.actionButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPin(pin.slice(0, -1))}
          style = {styles.backButton}>
          <Text style = {styles.actionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity // @ts-ignore 
        onPress={() => navigation.navigate('Register')}
        style = {styles.registerButton}>
        <Text style = {styles.registerButtonText}>Don't have an account? Tap here.</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    marginBottom: 40,
  },
  pinPad: {
    marginBottom: 40,
  },
  pinDisplay: {
    
  },
  loginButton: {
    backgroundColor:'grey',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  backButton: {
    backgroundColor: "red",
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 20,
  },
  pinButton: {
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
    borderRadius: 30,
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
  registerButton: {
    marginTop: 60,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 20,
  }
});
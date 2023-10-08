import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import React, { useState, useMemo } from 'react';

const Login = () => {

  const [pin, setPin] = useState('');
  const [displayPin, setDisplayPin] = useState('');

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

  const navigation = useNavigation(); // enable navigation

  React.useLayoutEffect(() => { // disable header
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Pinpad */}
      <View>
        <Text style={styles.displayPin}>{displayPin}</Text>
        <View style={styles.pinRow}>
          <TouchableOpacity onPress={() => handlePress("1")} style={styles.pinButton}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("2")} style={styles.pinButton}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("3")} style={styles.pinButton}>
            <Text>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pinRow}>
          <TouchableOpacity onPress={() => handlePress("4")} style={styles.pinButton}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("5")} style={styles.pinButton}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("6")} style={styles.pinButton}>
            <Text>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pinRow}>
          <TouchableOpacity onPress={() => handlePress("7")} style={styles.pinButton}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("8")} style={styles.pinButton}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress("9")} style={styles.pinButton}>
            <Text>9</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Buttons */}
      <View style={styles.pinRow}>
        <TouchableOpacity // @ts-ignore 
          onPress={() => navigation.navigate('Home')}
          style = {styles.loginButton}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPin(pin.slice(0, -1))}
          style = {styles.backButton}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    alignItems: 'center',
    justifyContent: 'center',
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
  pinButton: {
    backgroundColor:'green',
    padding: 30,
    margin: 20,
    borderRadius: 35,
  },
  pinRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  displayPin: {
    color: 'white',
    fontSize: 40,
  }
});
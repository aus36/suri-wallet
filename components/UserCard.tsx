// custom component for card that displays user on users screen
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/core';

// type userProps = {
//   user: {
//     displayName: string,
//     did: string,
//     bio: string,
//     pin: string,
//     sigchain: Array<Object>,
//   };
// };

// @ts-ignore
const UserCard = (props) => {
    
    const navigation = useNavigation(); // enable navigation
    const { setCurrentUser } = useAuth(); // enable auth functionality

    function handlePress() {
        setCurrentUser(props.user.displayName);
        // @ts-ignore
        navigation.navigate('Login');
    }

    return (
        <TouchableOpacity onPress={() => {handlePress()}} style={styles.container}>
            <View style={styles.row}>
                {props.user.displayImage ? (
                    <Image style = {styles.profileLogo} source={{uri: props.user.displayImage}} />
                ) : (
                    <AntDesign name="user" size={36} color="white" style = {styles.profileLogo}/>
                )}
                <Text style = {styles.bodyText}>{props.user.displayName}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: "100%",
    borderRadius: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    marginVertical: 5,
  },
  profileLogo: {
    borderWidth: 1,
    borderRadius: 35,
    borderColor: 'white',
    padding: 15,
    marginRight: 40,
    right: 10,
},
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bodyText: {
    color: 'white',
    fontSize: 22,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// type connectionProps = {
//   connection: {
//     displayName: string;
//     displayImagePath: string;
//   };
// };

// @ts-ignore
const ConnectionCard = (props:connectionProps) => {

  function handleImage() {
    if(props.connection.displayImagePath === "") {
      return require('../assets/blankpfp.png');
    }
    else {
      return {uri: props.connection.displayImagePath};
    }
  }

  return ( // @ts-ignore
    <TouchableOpacity onPress={() => {Alert.alert("Unfollow "+props.connection.displayName+"?")}} style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image source={handleImage()} style = {styles.profileImage}/>
        </View>
        <View style={styles.textContainer}>
          <Text style = {styles.cardText}>{props.connection.displayName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ConnectionCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    marginVertical: 5,
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 999,
  },
  imageContainer: {
    height: "100%",
    width: "35%",
    alignItems: 'center',
    justifyContent: 'center',

  },
  textContainer: {
    height: "100%",
    width: "60%",
    justifyContent: 'center',

  },
  cardText: {
    color: 'white',
    fontSize: 26,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
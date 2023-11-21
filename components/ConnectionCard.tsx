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
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <Image source={handleImage()} style = {styles.profileImage}/>
          <Text style = {styles.cardText}>{props.connection.displayName}</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={() => {Alert.alert("Unfollow "+props.connection.displayName+"?")}} style = {styles.unfollowButton}>
            <Text style = {styles.unfollowButtonText}>Unfollow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConnectionCard;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555555',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 999,
  },
  leftContainer: {
    height: "100%",
    width: "60%",
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightContainer: {
    height: "100%",
    width: "40%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: 'white',
    fontSize: 24,
    margin: 5,
    paddingRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unfollowButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unfollowButtonText: {
    color: 'black',
    fontSize: 18,
  },
});
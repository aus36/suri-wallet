import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

// type credentialProps = {
//   credential: {
//     id: number;
//     service: string;
//     date: string;
//   };
// };

function getImagePath(service:string) { // function to get social media images for each service or default image if none found
  switch(service) {
    default:
      return require('../assets/icon.png');
      break;
    case 'Twitter':
      return require('../assets/twitter.png');
      break;
    case 'Github':
      return require('../assets/github.png');
      break;
    case 'LinkedIn':
      return require('../assets/linkedin.png');
      break;
    case 'Facebook':
      return require('../assets/facebook.png');
      break;
    case 'Instagram':
      return require('../assets/instagram.png');
      break;
    case 'Reddit':
      return require('../assets/reddit.png');
      break;
    case 'Discord':
      return require('../assets/discord.png');
      break;
    case 'StackOverflow':
      return require('../assets/stackoverflow.png');
      break;
  }
}

// @ts-ignore
const CredentialCard = (props) => {

  const navigation = useNavigation(); // enable navigation
  
  const imageSource = getImagePath(props.credential.service); // fetch image path for current card

  return ( // @ts-ignore
    <TouchableOpacity onPress={() => {navigation.navigate("CredentialModification", props.credential)}} style={styles.container}>
      <View style={styles.row}>
        {/* Image container */}
        <View style={styles.imageContainer}>
          <Image style = {styles.image} source={imageSource} />
        </View>

        {/* Text container */}
        <View style = {styles.textContainer}>
          <View style={styles.column}>
            <Text style={styles.bodyText}>{props.credential.service}</Text>
            <Text style={styles.bodyText}>{props.credential.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CredentialCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303030',
    marginVertical: 5,
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
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    height: "100%",
    width: "60%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: "100%",
    width: "30%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
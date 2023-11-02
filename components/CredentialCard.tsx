import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import "../credentials/fucker.json"

// type credentialProps = {
//   credentials: {
//     id: number;
//     name: string;
//     email: string;
//   };
// };

function getImagePath(platform:string) { // function to get social media images for each platform or default image if none found
  switch(platform) {
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
  
  const imageSource = getImagePath(props.credential.platform);

  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image style = {styles.image} source={imageSource} />
        </View>
        <View style = {styles.textContainer}>
          <View style={styles.column}>
            <Text style={styles.bodyText}>{props.credential.platform}</Text>
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
    height: 110,
    width: "100%",
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
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
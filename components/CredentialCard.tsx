import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// type credentialProps = {
//   credentials: {
//     id: number;
//     name: string;
//     email: string;
//   };
// };

// @ts-ignore
const CredentialCard = (props) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image style = {styles.image} source={require('../assets/icon.png')} />
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
    width: 380,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
    margin: 5,
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
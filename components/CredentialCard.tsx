import { View, Text, StyleSheet } from 'react-native';

// @ts-ignore
const CredentialCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sample Credential Card</Text>
      <Text style={styles.text}>{props.id}</Text>
      <Text style={styles.text}>{props.platform}</Text>
      <Text style={styles.text}>{props.issuer}</Text>
      <Text style={styles.text}>{props.issueDate}</Text>
      <Text style={styles.text}>{props.expirationDate}</Text>
    </View>
  );
};

export default CredentialCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
  }
});
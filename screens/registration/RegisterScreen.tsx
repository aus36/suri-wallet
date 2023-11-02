import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = () => {

    const navigation = useNavigation(); // enable navigation

    const [URL, setURL] = useState<string>('');
    const [name, setName] = useState<string>('');

    const keyPair = { //TODO: actually generate keypair using crypto
        publicKey: "12309123810230",
        privateKey: "12309123810230"
    }

    useLayoutEffect(() => { // disable header
        navigation.setOptions({
            headerShown: false,
            gestureEnabled: true,
        });
    }, [navigation]);

    function createDidDoc(){{
        // did link for id
        const did = "did:web:" + URL.replace(/\//g, ':');
        console.log(did);
        // start with did doc template using did
        const didDocument = {
            "@context": [
                "https://www.w3.org/ns/did/v1",
                "https://w3id.org/security/suites/jws-2020/v1"
            ],
            "id": did,
            "verificationMethod": [
                {
                "id": did + "#key1",
                "type": "Ed25519VerificationKey2020",
                "controller": did + "#key1",
                "Ed25519VerificationKey2020" : keyPair.publicKey
                }
            ],
            "assertionMethod": [
                did + "#key1"
            ],
            "subject": {
                "name": name,
                "displayImg": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            }
        }
        
        // return and log didDoc
        console.log(JSON.stringify(didDocument, null, 2));
        return didDocument;
        }
    }
    
    
    function createSCVP(){ // creates sigchain verifiable presentation (the full profile of the user)
        // record did
        const did = "did:web:" + URL.replace(/\//g, ':');

        // record current datetime
        const date = new Date();
        const ctime = date.toISOString();
        const etime = "expiration not specified";

        // create the scvp
        const SCVP = {
                "@context": [
                    "https://www.w3.org/2018/credentials/v1"
                ],
                "type": [
                    "VerifiablePresentation", "SigchainPresentation"
                ],
                "verifiableCredential": [
                    {
                        "@context": [
                            "https://www.w3.org/2018/credentials/v1",
                            "https://www.w3.org/2018/credentials/examples/v1"
                        ],
                        "id": "http://example.com/user/sigs/eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ",
                        "type": [
                            "VerifiableCredential",
                            "SigchainCredential"
                        ],
                        "issuer": did,
                        "issuanceDate": ctime,
                        "prev": null,
                        "seqno": 1,
                        "ctime": ctime,
                        "etime": etime,
                        "credentialSubject": {
                            "id":did,
                            "vmHash": "sImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19 - replace this later",
                            "type": "identity",
                            "service": {
                                "name": "Github",
                                "user": "https://github.com/aus36",
                                "proof": "https://github.com/aus36/sample-proof/blob/master/proof.json"
                            },
                            "version": 0.1
                        },
                        "proof": {
                            "type": "Ed25519Signature2018",
                            "created": ctime,
                            "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..AUQ3AJ23WM5vMOWNtYKuqZBekRAOUibOMH9XuvOd39my1sO-X9R4QyAXLD2ospssLvIuwmQVhJa-F0xMOnkvBg - replace this later",
                            "proofPurpose": "assertionMethod",
                            "verificationMethod": did + "#key1"
                        }
                    }
                ]
            } 
        return SCVP;
    }

    function handleCreate() {
        if(URL !== '' && name !== '') {
            let did = createDidDoc();
            let VP = createSCVP();
            // @ts-ignore
            navigation.navigate('RegisterResults', {didDoc: did, SCVP: VP});
        }
        else {
            alert('Please fill out all fields');
        }
    }

    return (
        <View style = {styles.container}>
            {/*Header*/}
            <Text style = {styles.text}>Enter your info below to create your DID</Text>
            {/*Inputs*/}
            <TextInput
                style = {styles.input}
                placeholder='DID URL'
                placeholderTextColor="grey"
                onChange={(e) => {setURL(e.nativeEvent.text)}}
            />
            <TextInput
                style = {styles.input}
                placeholder='Display Name'
                placeholderTextColor="grey"
                onChange={(e) => {setName(e.nativeEvent.text)}}
            />
            {/*Submit Button*/}
            <TouchableOpacity style = {styles.submitButton} onPress={handleCreate}>
                <Text style = {styles.text}>Create DID</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141414',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    inputs: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        color: 'white',
        borderRadius: 15,
    },
    submitButton: {
        backgroundColor: 'grey',
        width: 120,
        height: 40,
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
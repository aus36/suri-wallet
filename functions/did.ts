import * as Crypto from 'expo-crypto';

// Sigchain Operations
function createGenesisBlock() {
    const genesisBlock = {
        seqno: 0,
        prev: null,
        timestamp: Date.now(),
        data: 'Genesis block',
    };
    
    return genesisBlock;
}

async function addBlock(data:Object, sigchain: Array<Object>):Promise<Array<Object>> {
    const block = {
        seqno: sigchain.length,
        prev: await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA512,sigchain[sigchain.length-1].toString()), // hashes the previous link in the chain
        timestamp: Date.now(),
        data: data,
    };
    sigchain.push(block);
    return sigchain;
}

export { createGenesisBlock, addBlock };

// DID Operations
function createDidDoc(name:string, URL:string){{
    // did link for id
    const did = "did:web:" + URL.replace(/\//g, ':');
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
            "Ed25519VerificationKey2020" : 1234567890 // TODO: generate actual keypair
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

export { createDidDoc };
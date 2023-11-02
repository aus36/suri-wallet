import * as Crypto from 'expo-crypto';

function createGenesisBlock() {
    const genesisBlock = {
        seqno: 0,
        prev: null,
        timestamp: Date.now(),
        data: 'Genesis block',
    };
    
    return genesisBlock;
}

async function addBlock(data:Object, sigchain: Array<Object>) {
    const block = {
        seqno: sigchain.length,
        prev: await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA512,sigchain[sigchain.length-1].toString()),
        timestamp: Date.now(),
        data: data,
    };
    
    return sigchain.push(block);
}

export { createGenesisBlock, addBlock };
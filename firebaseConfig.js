import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC8UD6CghvWI164wk2YMyy_KFEtjMcdTEo",
    authDomain: "suri-activitypub.firebaseapp.com",
    databaseURL: "https://suri-activitypub-default-rtdb.firebaseio.com",
    projectId: "suri-activitypub",
    storageBucket: "suri-activitypub.appspot.com",
    messagingSenderId: "641217963438",
    appId: "1:641217963438:web:a232d7e295074f411c543f"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
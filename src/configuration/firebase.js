import firebase from "firebase/app";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB9db0lUfsn9iDFsFJXWlkTPF6fgcAc4Ek",
    authDomain: "react-firebase-boilerpla-f2b86.firebaseapp.com",
    projectId: "react-firebase-boilerpla-f2b86",
    storageBucket: "react-firebase-boilerpla-f2b86.appspot.com",
    messagingSenderId: "759103325737",
    appId: "1:759103325737:web:c82c4de9e3b441a3293e38"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
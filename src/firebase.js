import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCB4pREJjnz-3Uf72rbT5pQAvMs-RuwnYI",
    authDomain: "imessage-58e35.firebaseapp.com",
    projectId: "imessage-58e35",
    storageBucket: "imessage-58e35.appspot.com",
    messagingSenderId: "492147482920",
    appId: "1:492147482920:web:735dd428e07e372e97701d",
    measurementId: "G-1XVKC7NMWR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
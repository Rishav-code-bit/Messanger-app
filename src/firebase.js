import firebase from './firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRxGhCGlfs3J4A037mUtrfuBTQYxmz78c",
    authDomain: "chat-app-9ba40.firebaseapp.com",
    projectId: "chat-app-9ba40",
    storageBucket: "chat-app-9ba40.appspot.com",
    messagingSenderId: "453720147349",
    appId: "1:453720147349:web:242fddb09498c763b0229c",
    measurementId: "G-SK69LL9T4M"
});

const db = firebaseApp.firestore();

export default db;
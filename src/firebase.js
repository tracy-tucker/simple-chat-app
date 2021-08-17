import firebase from 'firebase'

// Initialize access to Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDh21IUynwDycwCd4yZXTFl-sgv20Vn6MI",
    authDomain: "simple-chat-app-77124.firebaseapp.com",
    projectId: "simple-chat-app-77124",
    storageBucket: "simple-chat-app-77124.appspot.com",
    messagingSenderId: "342353483386",
    appId: "1:342353483386:web:e81877cff1ff560b4dcdc3",
    measurementId: "G-JM99MDS8F0"
});

// Initialize access to Firestore
const db = firebaseApp.firestore()

// Initialize access to Firebase Authentication
const auth = firebase.auth()

export { db, auth }
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDLUhqZdh6VYjmcf2MhDvRDhpLap5VrabA",
  authDomain: "td-amzon-clone.firebaseapp.com",
  projectId: "td-amzon-clone",
  storageBucket: "td-amzon-clone.appspot.com",
  messagingSenderId: "494128302051",
  appId: "1:494128302051:web:94020fa790d6234e17c2d6",
  measurementId: "G-VRXHTKQ8V2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };


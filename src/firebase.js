import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCMXT4WGFr-jdvTG3-o3JlvhErHjt5AFHk",
  authDomain: "clone-td-54127.firebaseapp.com",
  databaseURL: "https://clone-td-54127-default-rtdb.firebaseio.com",
  projectId: "clone-td-54127",
  storageBucket: "clone-td-54127.appspot.com",
  messagingSenderId: "465050512839",
  appId: "1:465050512839:web:0ac910a74a625a631f7de2",
  measurementId: "G-QE0NLY0NZW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };


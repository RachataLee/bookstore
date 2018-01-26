import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCcAFnr6hg6Tli_HY5gBP29zl9eJ5WaBFc",
    authDomain: "book-store-cab57.firebaseapp.com",
    databaseURL: "https://book-store-cab57.firebaseio.com",
    projectId: "book-store-cab57",
    storageBucket: "book-store-cab57.appspot.com",
    messagingSenderId: "884266126131"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;
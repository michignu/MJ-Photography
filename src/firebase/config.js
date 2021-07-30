import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBq2vTGCaLRUKeYd54rSBAqr6hcqRs2mTs",
    authDomain: "mj-photography.firebaseapp.com",
    projectId: "mj-photography",
    storageBucket: "mj-photography.appspot.com",
    messagingSenderId: "191179342868",
    appId: "1:191179342868:web:8767a5ec3f8eefa6029301"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};
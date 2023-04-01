import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFAY6l5kbRHFcZ2qSxpKvnaXiSuE_paP0",
    authDomain: "linkedin-clone-d8f95.firebaseapp.com",
    projectId: "linkedin-clone-d8f95",
    storageBucket: "linkedin-clone-d8f95.appspot.com",
    messagingSenderId: "211101072090",
    appId: "1:211101072090:web:3f125b053cbac02cb143e3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

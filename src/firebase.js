import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPGCgEJbRY4M8DjjmI_qTnfo0C-m7ZxUY",
  authDomain: "linkedin-clone-yt-67f1b.firebaseapp.com",
  databaseURL: "https://linkedin-clone-yt-67f1b-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-yt-67f1b",
  storageBucket: "linkedin-clone-yt-67f1b.appspot.com",
  messagingSenderId: "994742580668",
  appId: "1:994742580668:web:42fb36bcffa30cd4c3a7b9"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
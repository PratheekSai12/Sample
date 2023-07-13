import firebase from './firebase';
// import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjLnQ3h_eCDzh3wTHIXkiw0T88Q0NkFJo",
  authDomain: "aaladin-eb72d.firebaseapp.com",
  projectId: "aaladin-eb72d",
  storageBucket: "aaladin-eb72d.appspot.com",
  messagingSenderId: "781093901540",
  appId: "1:781093901540:web:124bddd7f8ecd18bf748f1",
  measurementId: "G-CMKFPHPZYP"
};

const app = initializeApp(firebaseConfig);
export default app;
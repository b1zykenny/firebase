import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBpE9VcSTb6YBGBDubQqnPeDjystNT1KY",
    authDomain: "fir-lesson-79f3a.firebaseapp.com",
    projectId: "fir-lesson-79f3a",
    storageBucket: "fir-lesson-79f3a.appspot.com",
    messagingSenderId: "867539971454",
    appId: "1:867539971454:web:884a44e2a9091a4877172f"
};

const firebasedb = firebase.initializeApp(firebaseConfig)
export const db = firebasedb.database().ref();
export const auth = firebase.auth();
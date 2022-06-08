import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB_rc4L96R-c5UVdjIisSg60YWcfY-qbBY",
    authDomain: "recipes-directory-app.firebaseapp.com",
    projectId: "recipes-directory-app",
    storageBucket: "recipes-directory-app.appspot.com",
    messagingSenderId: "508147261414",
    appId: "1:508147261414:web:137cf070ab603b1d270027"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firebase services
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectStorage, timestamp }
import firebase from "firebase/app";
import "firebase/firestore";
// Import authentication service
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAmYtFCLDvR-mQBqevdi86Z6AgyeAWFL0",
  authDomain: "live-chat-with-authentication.firebaseapp.com",
  projectId: "live-chat-with-authentication",
  storageBucket: "live-chat-with-authentication.appspot.com",
  messagingSenderId: "314890689567",
  appId: "1:314890689567:web:935e69046cbe966fb6092a",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init authentication service
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };

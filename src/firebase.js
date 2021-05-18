import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAX8Nnl42gox9wChjNXF7HxUPXMmA9xxZ4",
  authDomain: "wa-frontend.firebaseapp.com",
  projectId: "wa-frontend",
  storageBucket: "wa-frontend.appspot.com",
  messagingSenderId: "889213911562",
  appId: "1:889213911562:web:8d13e1e6d9508c5c9a95f3"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export {firebase, db};
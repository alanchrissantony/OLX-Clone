import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9ts-f2PLqFBT4in_Vt0wYic_i55UdLjI",
    authDomain: "olx-clone-91644.firebaseapp.com",
    projectId: "olx-clone-91644",
    storageBucket: "olx-clone-91644.appspot.com",
    messagingSenderId: "76486994151",
    appId: "1:76486994151:web:bae53d78508543808c9a42",
    measurementId: "G-4SZ4J1SHS1"
  };

  export default firebase.initializeApp(firebaseConfig)
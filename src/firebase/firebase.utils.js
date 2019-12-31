import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTqWR_6-u4iwScnfEgYLeSDb-Ln5j74Ao",
  authDomain: "crwn-db-6e4f8.firebaseapp.com",
  databaseURL: "https://crwn-db-6e4f8.firebaseio.com",
  projectId: "crwn-db-6e4f8",
  storageBucket: "crwn-db-6e4f8.appspot.com",
  messagingSenderId: "844540940105",
  appId: "1:844540940105:web:559fa197e1f4cbab899498",
  measurementId: "G-PLBYN97MJW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

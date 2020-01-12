// import firebase utility library
import firebase from "firebase/app";
// get what we need from the firebase import
import "firebase/firestore";
import "firebase/auth";

// config info for app inside firebase
const config = {
  apiKey: "AIzaSyDiCTrWnxT13LNnj6OlGvU7lYQ6ogCdubQ",
  authDomain: "ecommerce-store-db-7e46f.firebaseapp.com",
  databaseURL: "https://ecommerce-store-db-7e46f.firebaseio.com",
  projectId: "ecommerce-store-db-7e46f",
  storageBucket: "ecommerce-store-db-7e46f.appspot.com",
  messagingSenderId: "555076438128",
  appId: "1:555076438128:web:d49dc96e53388d97c20cb5",
  measurementId: "G-CMNZ6ZF41L"
};

// initialize firebase
firebase.initializeApp(config);

// exporting firebase util functions
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// exporting provider from authentication library
const provider = new firebase.auth.GoogleAuthProvider();

// prompt whenever we use google authentication
provider.setCustomParameters({ prompt: "select_account" });

// sign in with google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export the entire library just incase we want it
export default firebase;

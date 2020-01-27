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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // get query
  const snapShot = await userRef.get();

  // create and store into database when it's a new user
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error(`Error creating user`, error.message);
    }
  }
  return userRef;
};

// adding data to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // create the collection using the collection key
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // loop through and batch the calls together
    // get the document at the empty string
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // fire off the batch call
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;

    return accumulator;
  }, {});
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

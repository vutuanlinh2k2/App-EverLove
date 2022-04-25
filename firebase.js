import * as firebase from "firebase";
// import { getReactNativePersistence } from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyC_Je9WNHCtj2ywz9P1pjlO5dfHM5w7jLo",
  authDomain: "everlove-c90fd.firebaseapp.com",
  projectId: "everlove-c90fd",
  storageBucket: "everlove-c90fd.appspot.com",
  messagingSenderId: "221002110406",
  appId: "1:221002110406:web:b4947c8f466bf1d94f4ec7",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
  app = firebase.app();
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const firestore = firebase.firestore;
export const storage = firebase.storage();

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, browserLocalPersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDadXf8tPGjZyhlFvNI92aKOgwYxlmYQds",
  authDomain: "component-testing-1d630.firebaseapp.com",
  projectId: "component-testing-1d630",
  storageBucket: "component-testing-1d630.appspot.com",
  messagingSenderId: "46173601315",
  appId: "1:46173601315:web:26d8613a2f4b7e8519bb96"
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_PROVIDER = new GoogleAuthProvider();
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage, browserLocalPersistence)
});

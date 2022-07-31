import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getApp, initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  databaseURL: Constants.manifest.extra.databaseURL,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
};

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth
export const auth = getAuth(firebaseApp);
export const fbSignIn = signInWithEmailAndPassword;
export const fbSignUp = createUserWithEmailAndPassword;
export const fbSignOut = signOut;

// Storage
export const fbStorage = getStorage();

// FireStore
export const fbDatabase = getFirestore();

export const addUserToDatabase = async (userData) => {
  await setDoc(doc(fbDatabase, "users", userData.id), userData);
};

export const addUserProfilePhoto = async (file, currentUser) => {
  try {
    const response = await fetch(file.uri);
    const fileBlob = await response.blob();
    const fileRef = ref(fbStorage, `images/${currentUser.uid}.png`);
    await uploadBytes(fileRef, fileBlob);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, { photoURL });
  } catch (error) {
    console.error(error);
  }
};

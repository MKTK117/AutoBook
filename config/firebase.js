// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import {getFirestore, collection} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCCKuw196CdPOB2HTli2BqQotB9HbCHtT0",
  authDomain: "autoshare-2abb8.firebaseapp.com",
  projectId: "autoshare-2abb8",
  storageBucket: "autoshare-2abb8.appspot.com",
  messagingSenderId: "28059357177",
  appId: "1:28059357177:web:6dbc6d7a38d687126db728",
  measurementId: "G-7NQLY1RK5V"
};

// Initialize Firebase

// const analytics = getAnalytics();

// const db = getFirestore(app);

// export const auth = getAuth(app);

// async function getUsers(db) {
//   const usersCol = collection(db, 'users');
//   const userSnapshot = await getDocs(usersCol);
//   const usersList = userSnapshot.docs.map(doc => doc.data());
//   return usersList;
// }
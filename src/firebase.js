import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2wQZySyeV553rQCrIG1MuyHA6jW0-3CM",
  authDomain: "clone-ecom-deade.firebaseapp.com",
  projectId: "clone-ecom-deade",
  storageBucket: "clone-ecom-deade.appspot.com",
  messagingSenderId: "1035947025143",
  appId: "1:1035947025143:web:e3ca6c11956f67411529f2",
  measurementId: "G-V3KKEYNZ3Q"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

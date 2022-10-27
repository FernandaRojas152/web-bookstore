// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { useAuthenticationStore } from "../stores/authentication";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Oykr01NMmYTX1Fy6a2NoDqyc6PfCsxo",
  authDomain: "web-avanzada-20222.firebaseapp.com",
  projectId: "web-avanzada-20222",
  storageBucket: "web-avanzada-20222.appspot.com",
  messagingSenderId: "396420415683",
  appId: "1:396420415683:web:44082a39bdd4e519292276",
  measurementId: "G-GK0NR1RVZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  const authStore= useAuthenticationStore()
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    authStore.user = user;
    console.log(authStore.user);
    // ...
  } else {
    authStore.user = null;
    console.log(authStore.user);
    // User is signed out
    // ...
  }
});

export{auth, db}
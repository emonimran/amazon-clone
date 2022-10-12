import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3L2gNaqW2jm3CuLWim5QJkrDnpUYfc5w",
  authDomain: "clone-ca405.firebaseapp.com",
  projectId: "clone-ca405",
  storageBucket: "clone-ca405.appspot.com",
  messagingSenderId: "352604954558",
  appId: "1:352604954558:web:be834166c82fa611bd23ef",
  measurementId: "G-K0T3YYDG8Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

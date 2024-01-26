import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyCq_8yW1QfM8YV-uvtWH8xBZGACBtyjyzY",
  authDomain: "ecommerce-2d5c5.firebaseapp.com",
  projectId: "ecommerce-2d5c5",
  storageBucket: "ecommerce-2d5c5.appspot.com",
  messagingSenderId: "496808296884",
  appId: "1:496808296884:web:42e9c44de5c51321a6f2e1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth };

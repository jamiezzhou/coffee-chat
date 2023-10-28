import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxG4qKREssx266IxHOKLjHft9GFnu2P0Y",
  authDomain: "coffeechat-cb289.firebaseapp.com",
  projectId: "coffeechat-cb289",
  storageBucket: "coffeechat-cb289.appspot.com",
  messagingSenderId: "799285767972",
  appId: "1:799285767972:web:128db0fe52793c35790db1",
  measurementId: "G-7S49HQRNJD"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
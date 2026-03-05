import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";


// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBEwVjdHDHx27bzDYZQDVOkWphDTKpbK-A",
  authDomain: "plant-nursery-bab0c.firebaseapp.com",
  projectId: "plant-nursery-bab0c",
  storageBucket: "plant-nursery-bab0c.firebasestorage.app",
  messagingSenderId: "999598819292",
  appId: "1:999598819292:web:6908c3d6a440bba19b3119"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export services
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
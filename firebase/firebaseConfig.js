import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: 'file-sharing-nextjs.firebaseapp.com',
  projectId: 'file-sharing-nextjs',
  storageBucket: 'file-sharing-nextjs.appspot.com',
  messagingSenderId: '473991165718',
  appId: '1:473991165718:web:425a3dc81d223f88818237',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

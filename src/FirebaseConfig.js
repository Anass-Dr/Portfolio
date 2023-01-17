import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA_-itFl_HT9DSudhBz9UXsI7LyICERRnc',
  authDomain: 'portfolio-67d43.firebaseapp.com',
  projectId: 'portfolio-67d43',
  storageBucket: 'portfolio-67d43.appspot.com',
  messagingSenderId: '784759945660',
  appId: '1:784759945660:web:1df7dcdfcc40e6a1bbd3b9',
  measurementId: 'G-XMF26LVZC8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

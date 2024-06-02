// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCJsvvsAZzvGf1QKVHN2kbypr7uZn87EnM',
  authDomain: 'stream-tube-a123d.firebaseapp.com',
  projectId: 'stream-tube-a123d',
  storageBucket: 'stream-tube-a123d.appspot.com',
  messagingSenderId: '222747743744',
  appId: '1:222747743744:web:38ac28f3ec2b295257eae5',
  measurementId: 'G-N9NQRVHEB2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

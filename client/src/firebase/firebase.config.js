// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIuLuRyXWviHtEdeIXtRtwN-Hb-3hLtiY",
  authDomain: "book-store-2876d.firebaseapp.com",
  projectId: "book-store-2876d",
  storageBucket: "book-store-2876d.appspot.com",
  messagingSenderId: "728661456984",
  appId: "1:728661456984:web:ab981d17a6f27f7eaa722d",
  measurementId: "G-6XY00K24KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
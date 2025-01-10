// Import Firebase Auth SDK
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcTK-Zjn6dkD-qXgRdN9PjlEXOJWR8h3M",
  authDomain: "group5-9c8e7.firebaseapp.com",
  projectId: "group5-9c8e7",
  storageBucket: "group5-9c8e7.firebasestorage.app",
  messagingSenderId: "690914147957",
  appId: "1:690914147957:web:0ece9195d4ced1659f423c",
  measurementId: "G-LYNQBL2BNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign out the user
signOut(auth).then(() => {
  // Redirect to login page after logging out
  window.location.href = 'login.html';
}).catch((error) => {
  console.error('Error signing out: ', error);
});

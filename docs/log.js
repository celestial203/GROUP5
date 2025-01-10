// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcTK-Zjn6dkD-qXgRdN9PjlEXOJWR8h3M",
  authDomain: "group5-9c8e7.firebaseapp.com",
  projectId: "group5-9c8e7",
  storageBucket: "group5-9c8e7.appspot.com",
  messagingSenderId: "690914147957",
  appId: "1:690914147957:web:a68cf85774cffcd49f423c",
  measurementId: "G-GNW9188WYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form and input elements
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

// Listen for form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  try {
    // Log in the user with Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Login successful
    alert("Login successful!");
    console.log("Logged in user:", userCredential.user);

    // Redirect or take additional actions
    window.location.href = "index.html"; // Replace with your desired redirect page
  } catch (error) {
    // Handle errors
    console.error("Error during login:", error);
    alert(error.message); // Display error message to the user
  }
});

// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcTK-Zjn6dkD-qXgRdN9PjlEXOJWR8h3M",
  authDomain: "group5-9c8e7.firebaseapp.com",
  projectId: "group5-9c8e7",
  storageBucket: "group5-9c8e7.appspot.com",
  messagingSenderId: "690914147957",
  appId: "1:690914147957:web:a68cf85774cffcd49f423c",
  measurementId: "G-GNW9188WYY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form and input elements
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1];

// Listen for form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Validate passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // Create a new user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // User created successfully
    alert("Registration successful!");
    console.log("User:", userCredential.user);

    // Redirect or perform additional actions
    window.location.href = "welcome.html"; // Redirect to welcome page
  } catch (error) {
    // Handle errors
    console.error("Error during registration:", error);
    alert(error.message); // Display error message to the user
  }
});

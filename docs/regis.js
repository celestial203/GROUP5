// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcTK-Zjn6dkD-qXgRdN9PjlEXOJWR8h3M",
  authDomain: "group5-9c8e7.firebaseapp.com",
  projectId: "group5-9c8e7",
  storageBucket: "group5-9c8e7.appspot.com", // Corrected bucket
  messagingSenderId: "690914147957",
  appId: "1:690914147957:web:a68cf85774cffcd49f423c",
  measurementId: "G-GNW9188WYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase initialized successfully"); // Debug log

// Form submission handler
const form = document.querySelector("#register-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page reload

  // Get user input
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  // Validate fields
  if (!email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Register user in Firebase
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    alert(`Registration successful! Welcome, ${user.email}`);
    console.log("User registered:", user);

    // Redirect to login page
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error during registration:", error);

    // Handle Firebase errors
    if (error.code === "auth/email-already-in-use") {
      alert("This email is already registered. Please log in.");
    } else if (error.code === "auth/weak-password") {
      alert("Password should be at least 6 characters.");
    } else if (error.code === "auth/invalid-email") {
      alert("Invalid email address.");
    } else {
      alert(`Error: ${error.message}`);
    }
  }
});

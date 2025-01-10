// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcTK-Zjn6dkD-qXgRdN9PjlEXOJWR8h3M",
  authDomain: "group5-9c8e7.firebaseapp.com",
  projectId: "group5-9c8e7",
  storageBucket: "group5-9c8e7.firebasestorage.app",
  messagingSenderId: "690914147957",
  appId: "1:690914147957:web:a68cf85774cffcd49f423c",
  measurementId: "G-GNW9188WYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission for registration
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get user input
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {
    // Register the user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert("Registration successful! Welcome, " + user.email);
    // Redirect to login page or another page
    window.location.href = "index.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
});

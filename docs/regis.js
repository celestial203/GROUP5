// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration object
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

// Form submission handler
const form = document.querySelector("#register-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get user input
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  // Validate password confirmation
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // Create user in Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    alert(`Registration successful! Welcome, ${user.email}`);
    // Redirect to login page
    window.location.href = "index.html";
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

// Import the necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
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
const analytics = getAnalytics(app);
const auth = getAuth();

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailPhone = document.getElementById('emailPhone').value;
  const password = document.getElementById('password').value;

  // Check if the input is a valid email or phone number
  if (emailPhone.includes('@')) {
    // Email registration
    createUserWithEmailAndPassword(auth, emailPhone, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Registration successful! Welcome!');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  } else {
    // Phone registration (using Firebase phone number authentication)
    const appVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // Do something when captcha is solved
      }
    }, auth);

    signInWithPhoneNumber(auth, emailPhone, appVerifier)
      .then((confirmationResult) => {
        const verificationCode = prompt("Enter the verification code sent to your phone:");
        return confirmationResult.confirm(verificationCode);
      })
      .then((result) => {
        alert('Registration successful!');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  }
});

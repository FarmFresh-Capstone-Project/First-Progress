/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

document.addEventListener('DOMContentLoaded', () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDrQXY_qvRuWIU6GkRwm_q5yOcb01OZue8',
    authDomain: 'test-web-ccb0e.firebaseapp.com',
    projectId: 'test-web-ccb0e',
    storageBucket: 'test-web-ccb0e.appspot.com',
    messagingSenderId: '490048077838',
    appId: '1:490048077838:web:b4a23ecb88dd1bc6473c5f',
    measurementId: 'G-R9D748RHVQ',
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (!user && window.location.pathname !== '/login.html' && window.location.pathname !== '/registrasi.html') {
      window.location.href = '/login.html'; // Redirect to login page if user is not authenticated
    }
  });

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = loginForm.username.value; // Changed to 'username' from 'email'
      const password = loginForm.password.value;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential;
          console.log('Success! Welcome back!');
          window.location.href = '/index.html';
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('Error occurred. Try again.');
          window.alert('Error occurred. Try again.');
        });
    });
  }

  const registrasiForm = document.getElementById('registrasiForm');
  if (registrasiForm) {
    registrasiForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = registrasiForm.email.value;
      const password = registrasiForm.password.value;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Registered
          const { user } = userCredential;
          console.log('Success! Account created.');
          window.location.href = '/login.html';
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('Error occurred. Try again.');
          window.alert('Error occurred. Try again.');
        });
    });
  }

  const logoutButton = document.getElementById('logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign out successful');
        window.location.href = '/login.html';
      }).catch((error) => {
        // An error happened.
        console.log('Error occurred during sign out');
      });
    });
  }
});

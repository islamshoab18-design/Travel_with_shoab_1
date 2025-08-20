// Basic Firebase Auth for Login and Signup
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const auth = getAuth();

// Login
window.login = function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login successful!');
            document.getElementById('loginModal').style.display = 'none';
            // Optionally update UI for logged-in user
        })
        .catch((error) => {
            alert('Login failed: ' + error.message);
        });
}

// Signup
window.signup = function(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Signup successful!');
            document.getElementById('signupModal').style.display = 'none';
            // Optionally update UI for logged-in user
        })
        .catch((error) => {
            alert('Signup failed: ' + error.message);
        });
}

// Logout
window.logout = function() {
    signOut(auth).then(() => {
        alert('Logged out!');
        // Optionally update UI for logged-out user
    });
}

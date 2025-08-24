
// Initialize Firebase Auth
const auth = firebase.auth();

// Signup function
window.signup = function(event) {
	event.preventDefault();
	const email = document.getElementById('signupEmail').value;
	const password = document.getElementById('signupPassword').value;
	auth.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			alert('Signup successful!');
			window.location.href = 'destinations.html';
		})
		.catch((error) => {
			alert('Signup failed: ' + error.message);
		});
}

// Login function
window.login = function(event) {
	event.preventDefault();
	const email = document.getElementById('loginEmail').value;
	const password = document.getElementById('loginPassword').value;
	auth.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			alert('Login successful!');
			window.location.href = 'destinations.html';
		})
		.catch((error) => {
			alert('Login failed: ' + error.message);
		});
}

// Logout function
window.logout = function() {
	auth.signOut().then(() => {
		alert('Logged out!');
	});
}


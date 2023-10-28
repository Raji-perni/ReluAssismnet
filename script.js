// Initialize Firebase with your Firebase config
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Firebase authentication references
var auth = firebase.auth();

function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            document.getElementById("message").textContent = "Logged In Successfully!";
        })
        .catch(function(error) {
            document.getElementById("message").textContent = "Error: " + error.message;
        });
}

function signup() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            document.getElementById("message").textContent = "Account Created Successfully!";
        })
        .catch(function(error) {
            document.getElementById("message").textContent = "Error: " + error.message;
        });
}

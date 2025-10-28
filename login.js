import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-RdplmRyGopfpxGn-zVraMe25_wP5Puk",
    authDomain: "mediauth-3a3e0.firebaseapp.com",
    projectId: "mediauth-3a3e0",
    storageBucket: "mediauth-3a3e0.firebasestorage.app",
    messagingSenderId: "101085507385",
    appId: "1:101085507385:web:843e0ef9fe8a4a382742e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit button
const submit = document.getElementById('loginsubmit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    //inputs
    const loginid = document.getElementById('loginid').value;
    const loginpassword = document.getElementById('loginpassword').value;

    signInWithEmailAndPassword(auth, loginid, loginpassword)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("loging in")
            window.location.href="laptop.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})
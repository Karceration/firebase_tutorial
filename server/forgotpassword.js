
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAuth , sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBVLoPi1TUaTofuX3VaKYOYiLV3ZNkDrik",
authDomain: "masterclassadmindash.firebaseapp.com",
projectId: "masterclassadmindash",
storageBucket: "masterclassadmindash.appspot.com",
messagingSenderId: "30745330105",
appId: "1:30745330105:web:893ff88351f2eddb7cb668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


const formulaire = document.getElementById("resetform");

function ResetPassword(e) {
    e.preventDefault();
    const email = document.getElementById("resetpwd").value;
    if(email.trim().length === 0) {alert("fill the form bro")}
    else {
        sendPasswordResetEmail(auth,email)
    .then(()=>{
        alert("a link has been sent to your email");

    })
    .catch((error)=>{
        console.log(error);
        alert("error ! try again")


    })

    }
}







formulaire.addEventListener("submit",(e)=>ResetPassword(e));

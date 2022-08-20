//mdp 123456789
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
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

const formulaire = document.getElementById("LoginForm");

function CheckLogin(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log(userCredential);
        localStorage.setItem("cnx","A");
        alert("Connection success");
        window.location="../pages/admin.html";

    })
    .catch((error)=>{
        console.log(error);
        alert("password or email invalide !");
    }     
    )
}



formulaire.addEventListener("submit",(e)=>CheckLogin(e));


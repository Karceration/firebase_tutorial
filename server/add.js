// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase , set , ref} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBVLoPi1TUaTofuX3VaKYOYiLV3ZNkDrik",
authDomain: "masterclassadmindash.firebaseapp.com",
databaseURL : "https://masterclassadmindash-default-rtdb.europe-west1.firebasedatabase.app/" ,
projectId: "masterclassadmindash",
storageBucket: "masterclassadmindash.appspot.com",
messagingSenderId: "30745330105",
appId: "1:30745330105:web:893ff88351f2eddb7cb668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const MyForm = document.getElementById("myForm");

function SubmitForm(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const adresse = document.getElementById("adresse").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;

    if (email.trim().length=== 0 || password.trim().length=== 0 || adresse.trim().length=== 0 || city.trim().length=== 0 || zip.trim().length=== 0 ) {alert("fill everything pls")}
    else {
        createUser(email,password,adresse,city,zip);
        alert("User Created Successfully");
        MyForm.reset();
    }

}

//SEND DATA
function createUser(email,password,adresse,city,zip) {
    const db = getDatabase();
    set(ref(db,'users/'+email.slice(0,4)+Math.floor(Math.random()*100).toString()),{
        email:email,
        password:password,
        adresse:adresse,
        city:city,
        zip:zip

    }
        

    )

}



MyForm.addEventListener("submit",(e)=>SubmitForm(e));
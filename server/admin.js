// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase , onValue , ref} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
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
const db = getDatabase(app);

function affichageUsers() {
    const allusers = ref(db,"users/");
    onValue(allusers,(snapshot)=>{
        const data = snapshot.val();
        var keys = Object.keys(data);
        for (let i=0;i<keys.length ; i++){
            var current_user = keys[i];
            var email = data[current_user].email;
            var password = data[current_user].password;
            var adresse = data[current_user].adresse;
            var city = data[current_user].city;
            var zip = data[current_user].zip;
            
            var element = document.createElement("div");
            element.innerHTML =
            '<div class="mb-3 w-75">'+
            '<i class="bi bi-person-check-fill"></i>'+
            '<span class="text-success text-decoration-underline">'+ current_user+'</span>'+
            '<div>'+
            '<h3><span class="text-primary">Email :</span>'+email+'</h3>'+
            '</div>'
            +'<p class="mb-0"> TOWN : '+adresse+'</p>'
            +'<p class="mb-0"> CITY: '+city+'</p>'
            +'<p class="mb-0"> ZIP_CODE : '+zip+'</p>';

            document.getElementById('dashboard').appendChild(element);
            
        }
    })

}

affichageUsers();
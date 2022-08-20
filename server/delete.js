// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,get,ref,remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
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
const db = getDatabase(app)

const myForm = document.getElementById("deleteform");

function deleteUser(e) {
    e.preventDefault();
    const userId = document.getElementById("deleteinput").value;
    if(userId.trim().length<1) {
        alert("User not found");
    }
    else {
        const userRef = ref(db,"users/"+userId) //returns object to destroy
        get(userRef)
        .then((result)=>{
            if(result.exists()){
                remove(userRef).then(()=>{
                    alert('user:'+''+ userId+''+'has been removed')
                    myForm.reset();
                });
            }
        })
        .catch((error)=>{
            alert("try again , error happened");
            console.log(error);

        })

        

    }
}



myForm.addEventListener('submit',(e)=>deleteUser(e));

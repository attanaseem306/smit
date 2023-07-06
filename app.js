//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
//  import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-getAuth.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyByE2tN_PsLz9wl8JS1wPUp9HRcwMw-0qI",
//    authDomain: "first-352b3.firebaseapp.com",
//    projectId: "first-352b3",
//    storageBucket: "first-352b3.appspot.com",
//    messagingSenderId: "627727661584",
//    appId: "1:627727661584:web:3e87800afbdcf0fc972895",
//    measurementId: "G-99CRDS20VC"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);

// btn.addEventListener("click",()=>{

//     var btn=document.getElementById("btn");
//     var email=document.getElementById("email").value;
//     var pass=document.getElementById("pass").value;
   

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// })


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-getAuth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyDnQAk5ONtVrlVukJNA1ah4dt0kZVCpzBk",
   authDomain: "save-be155.firebaseapp.com",
   projectId: "save-be155",
   storageBucket: "save-be155.appspot.com",
   messagingSenderId: "863459774933",
   appId: "1:863459774933:web:13bbd1a748ee0a2412ad5c",
   measurementId: "G-23NY7LJC54"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAuth(app);
 console.log(app);
 console.log(analytics);


let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
btn.addEventListener('click' , () => {

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})
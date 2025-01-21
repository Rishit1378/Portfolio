import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9A16lBhPsu4T8Re3LRAmsKrkkVa0-6j0",
  authDomain: "portfolio-6f9d2.firebaseapp.com",
  projectId: "portfolio-6f9d2",
  storageBucket: "portfolio-6f9d2.firebasestorage.app",
  messagingSenderId: "31934810765",
  appId: "1:31934810765:web:172d13faf385fb0e31f0c4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const contactform = document.querySelector(".cform");
const fname = document.querySelector(".name");
const em = document.querySelector(".email");
const phn = document.querySelector(".phone");
const msg = document.querySelector(".tarea");
const submit = document.querySelector(".sub");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addDoc(collection(db, "contactform"), {
    fullname: fname.value,
    email: em.value,
    message: msg.value,
    phonenumber: phn.value,
  })
    .then(() => {
      contactform.reset();
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
});

// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXZXMWK2ik3pfVdvXdIIMRNnSXoOfDI0s",
    authDomain: "peliculas-954df.firebaseapp.com",
    projectId: "peliculas-954df",
    storageBucket: "peliculas-954df.appspot.com",
    messagingSenderId: "1086687660262",
    appId: "1:1086687660262:web:a002283f9967dfd6e99327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHla8K1ma06mDhmJvl-uJIpz-ULFuNY2A",
    authDomain: "tecno-tienda-ec556.firebaseapp.com",
    projectId: "tecno-tienda-ec556",
    storageBucket: "tecno-tienda-ec556.appspot.com",
    messagingSenderId: "970173202949",
    appId: "1:970173202949:web:e38b102251f226e763926c",
    measurementId: "G-X051BPGNKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
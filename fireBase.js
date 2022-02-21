// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQvMsewiGseSmgox1x2qO2k3eAp5Pe2c",
  authDomain: "rn-ecommerceapp.firebaseapp.com",
  projectId: "rn-ecommerceapp",
  storageBucket: "rn-ecommerceapp.appspot.com",
  messagingSenderId: "612234605396",
  appId: "1:612234605396:web:029c5439b5aa6282840ec1",
};

// Initialize Firebase
app = firebase.initializeApp(firebaseConfig);
// let app;
// if (firebase.lenght === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
const auth = firebase.auth();

export { auth };

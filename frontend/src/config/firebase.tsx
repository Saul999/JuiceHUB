import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6_wNSHWkeweoqw6H0UgyRlV4Yc6W8e6E",
  authDomain: "juicehub-a067f.firebaseapp.com",
  projectId: "juicehub-a067f",
  storageBucket: "juicehub-a067f.appspot.com",
  messagingSenderId: "1095869248171",
  appId: "1:1095869248171:web:4587220a7e4d889c5ebdee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

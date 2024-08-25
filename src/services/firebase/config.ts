// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY4O31zfuC6xaXokvIvIdmZM-7DHWNHm4",
  authDomain: "med-o-chat-sc1.firebaseapp.com",
  projectId: "med-o-chat-sc1",
  storageBucket: "med-o-chat-sc1.appspot.com",
  messagingSenderId: "659929545049",
  appId: "1:659929545049:web:ade64c003c58ebbd6af448"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };

import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth" 

const firebaseConfig = {
    apiKey: "AIzaSyCS0pO6b225lW45un-shHn3A5MzIIU4rjU",
    authDomain: "chat-73dcf.firebaseapp.com",
    projectId: "chat-73dcf",
    storageBucket: "chat-73dcf.appspot.com",
    messagingSenderId: "1066963690922",
    appId: "1:1066963690922:web:4d69f9704fa0cd49d477d3",
    measurementId: "G-KSW62X4F4Y"
};
 
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)






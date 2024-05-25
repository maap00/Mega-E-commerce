import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDQDgXRz6bzWTy7lYnSGDVBHXxYTQCLlBU",
  authDomain: "maap-e-commerse.firebaseapp.com",
  projectId: "maap-e-commerse",
  storageBucket: "maap-e-commerse.appspot.com",
  messagingSenderId: "535883051360",
  appId: "1:535883051360:web:a367772bde89439b4eee05"
};


export const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuração do Firebase usando os dados do projeto REVAIDA FCIL APP
const firebaseConfig = {
  apiKey: "AIzaSyADjhlT58gttZ3GzJH5odgbExlxBg6XikI",
  authDomain: "revaida-fcil-app.firebaseapp.com",
  projectId: "revaida-fcil-app",
  storageBucket: "revaida-fcil-app.appspot.com",
  messagingSenderId: "185404830586",
  appId: "1:185404830586:web:YOUR_APP_ID" // Atualize com o seu App ID se necessário
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

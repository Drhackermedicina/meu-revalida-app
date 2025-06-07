import { initializeApp } from "firebase/app";

// Configuração do app "Revalida Fácil"
// Obtenha essas informações na aba "Configurações do Projeto" > "Geral" no Console do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyADjhlT58gttZ3GzJH5odgbExlxBg6XikI",
  authDomain: "revaida-fcil-app.firebaseapp.com",
  projectId: "revaida-fcil-app",
  storageBucket: "revaida-fcil-app.firebasestorage.app",
  messagingSenderId: "185404830586",
  appId: "1:185404830586:web:c0f8ee056cb153de445cc3"
};

// Inicializa o Firebase com a configuração do app "Revalida Fácil"
const app = initializeApp(firebaseConfig);

export { app, firebaseConfig };

// Localização: src/lib/firebase.ts

// As credenciais são lidas do arquivo .env.local, que deve conter os valores reais para o app "Revalida Fácil".

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Define a configuração usando as variáveis de ambiente
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inicializa o Firebase de forma segura evitando reinicialização em desenvolvimento
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

// Em desenvolvimento, você pode conectar aos emuladores (descomente se necessário)
// if (process.env.NODE_ENV === "development") {
//   connectFirestoreEmulator(db, "localhost", 8282);
//   connectAuthEmulator(auth, "http://localhost:9099");
// }
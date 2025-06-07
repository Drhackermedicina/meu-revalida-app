"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Se autenticado, redireciona para o dashboard
        router.push("/app/dashboard");
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Revaida Fcil App</h1>
      <p className="mb-6">
        Por favor, faça login ou cadastre-se para acessar a plataforma de treinamento em tempo real.
      </p>
      <div className="space-x-4">
        <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</a>
        <a href="/register" className="px-4 py-2 bg-green-600 text-white rounded">Cadastre-se</a>
      </div>
    </div>
  );
}

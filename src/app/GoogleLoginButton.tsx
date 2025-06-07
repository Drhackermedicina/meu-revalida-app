"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setErro("");
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err: any) {
      setErro("Falha ao se conectar com o Google. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 mt-4 border border-gray-300 rounded-lg shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-200"
      >
        {isLoading ? "Aguarde..." : "Entrar com Google"}
      </button>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
}

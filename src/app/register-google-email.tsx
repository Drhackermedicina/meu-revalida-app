import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function RegisterGoogleEmail() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState<any>(null);
  const [erro, setErro] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, senha);
      setUser(cred.user);
    } catch (err: any) {
      setErro(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setErro("");
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      setUser(cred.user);
    } catch (err: any) {
      setErro(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Bem-vindo, {user.email}!</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
            <button type="submit">Cadastrar com E-mail</button>
          </form>
          <button onClick={handleGoogleLogin} style={{ marginTop: 8 }}>
            Entrar com Google
          </button>
          {erro && <p style={{ color: "red" }}>{erro}</p>}
        </div>
      )}
    </div>
  );
}

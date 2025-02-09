import { useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin.ts";
import { useAuth } from "../../context/AuthContext.tsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate, loading, error } = useLogin();
  const { isAuthenticated } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    authenticate(username, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl mb-6">Connexion</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-600 bg-gray-800 rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-600 bg-gray-800 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 p-2 rounded"
          disabled={loading}
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default Login;

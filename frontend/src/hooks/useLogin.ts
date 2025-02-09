import { useState } from "react";
import { useAuth } from "../context/AuthContext.tsx";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const authenticate = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error("Identifiants incorrects");

      const data = await response.json();
      login(data.token);
    } catch (err) {
      setError("Échec de l'authentification");
    } finally {
      setLoading(false);
    }
  };

  return { authenticate, loading, error };
};

export default useLogin;
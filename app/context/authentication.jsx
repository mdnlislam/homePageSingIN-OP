"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthPageUrl } from "@/config";
import axios from "axios";
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const router = useRouter();
  const [isAuthentication, setAuthentication] = useState(null);
  const [loading, setLoading] = useState(true);
  /**
   * 1.
   *
   */
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      // setAuthentication(true);
      try {
        const { email, password } = JSON.parse(user);
        handleSubmit({ email, password });
      } catch (err) {
        localStorageClearAndRedirect();
        console.log(err.message, "3");
      }
    } else {
      localStorageClearAndRedirect();
      console.log("2");
    }

    setLoading(false);
  }, []);

  const localStorageClearAndRedirect = () => {
    router.push(AuthPageUrl);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const handleSubmit = async (user) => {
    try {
      const res = await axios.post("api/signin", user);
      alert(res.data.message);

      // Token and user info save
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      // Update auth state
      setAuthentication(true);

      // Login success redirect
      router.push("/homePage");
    } catch (err) {
      console.log(err.message, "1");
      localStorageClearAndRedirect();
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthentication, setAuthentication, loading }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

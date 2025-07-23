"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AuthPageUrl, protacPageUrl } from "@/config";
//import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthentication, setAuthentication] = useState(null); // null = loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  const validetiontoken = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token && !user) {
      router.push(AuthPageUrl);
    }
    // console.log(token, user, "token");
    const interval = setInterval(() => {
      const currentTokent = localStorage.getItem("token");
      const currentuser = localStorage.getItem("user");

      if (token !== currentTokent && user !== currentuser) {
        router.push(AuthPageUrl);
      }
    }, 1000);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    validetiontoken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthentication, setAuthentication, loading }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

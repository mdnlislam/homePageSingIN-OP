"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AuthPageUrl, protacPageUrl } from "@/config";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthentication, setAuthentication] = useState(null); // null means unknown
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuthentication(false);
        setLoading(false);
        return;
      }
      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp && decoded.exp < now) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setAuthentication(false);
        } else {
          setAuthentication(true);
        }
      } catch (err) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setAuthentication(false);
      }

      setLoading(false);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (isAuthentication === false && protacPageUrl.includes(pathname)) {
        router.push(AuthPageUrl);
      }
    }
  }, [loading, pathname, isAuthentication]);

  return (
    <AuthContext.Provider
      value={{ isAuthentication, setAuthentication, loading }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

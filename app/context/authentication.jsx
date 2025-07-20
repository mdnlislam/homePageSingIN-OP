"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AuthPageUrl, protacPageUrl } from "@/config";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthentication, setAuthentication] = useState(null); // null means unknown
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setAuthentication(true);
      } else {
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

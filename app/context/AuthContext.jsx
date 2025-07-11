"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  // ✅ লোকালস্টোরেজ থেকে শুরুতেই login অবস্থা নেওয়া
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isAuthenticated") === "true";
    }
    return false;
  });

  // ✅ লোকালস্টোরেজে login অবস্থা সংরক্ষণ করা
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  // ✅ রিডাইরেক্ট কন্ট্রোল
  useEffect(() => {
    if (!isAuthenticated && pathname !== "/signin") {
      // ইউজার লগইন না করলে signin এ পাঠানো হবে
      router.push("/signin");
    } else if (isAuthenticated && pathname === "/signin") {
      // ইউজার আগে থেকেই লগইন করা থাকলে signin এ গেলে homePage এ পাঠানো হবে
      router.push("/homePage");
    }
  }, [isAuthenticated, pathname]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

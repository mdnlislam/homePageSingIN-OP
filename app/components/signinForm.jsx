"use client";
import { useAuth } from "@/app/context/authentication";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function SigninForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { setAuthentication } = useAuth();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    //setIsAuthenticated(true);

    try {
      const res = await axios.post("api/signin", form);
      alert(res.data.message);

      // save to localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      //update auth state
      setAuthentication(true);
      //login success redirect
      router.push("/homePage");
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-green-700">
          Signin
        </h2>

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-black font-medium">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border border-gray-300 p-3 rounded-md w-full placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="block text-black font-medium">Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border border-gray-300 p-3 rounded-md w-full placeholder-black text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

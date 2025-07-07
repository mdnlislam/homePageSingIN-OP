"use client";
import { useState } from "react";
import SignupForm from "../components/signupForm";
import SigninForm from "../components/signinForm";

export default function Auth() {
  const [showForm, setShowForm] = useState(null);
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Welcome</h1>
      <button
        onClick={() => setShowForm("signup")}
        className="mr-4 bg-blue-500 text-white px-4 py-2"
      >
        Signup
      </button>
      <button
        onClick={() => setShowForm("signin")}
        className="bg-green-500 text-white px-4 py-2"
      >
        Signin
      </button>

      <div className="mt-10">
        {showForm === "signup" && <SignupForm />}
        {showForm === "signin" && <SigninForm />}
      </div>
    </div>
  );
}

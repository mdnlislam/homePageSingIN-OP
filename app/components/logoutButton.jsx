"use client";
import { useAuth } from "@/app/context/authentication";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const { setAuthentication } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuthentication(false);
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded-md"
    >
      Logout
    </button>
  );
}

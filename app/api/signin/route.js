// app/api/login/route.js

import connectDb from "@/lib/dbconnect"; // ডেটাবেজ কানেক্ট করার জন্য
import User from "@/model/user"; // ইউজার মডেল
import { NextResponse } from "next/server"; // রেসপন্স পাঠাতে

export async function POST(req) {
  try {
    // 1️⃣ ফর্ম থেকে email আর password নেওয়া
    const { email, password } = await req.json();

    // 2️⃣ MongoDB কানেক্ট করা
    await connectDb();

    // 3️⃣ Email দিয়ে ইউজার খোঁজা
    const user = await User.findOne({ email });

    // 4️⃣ ইউজার না থাকলে বা পাসওয়ার্ড না মিললে error দেখানো
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.password !== password) {
      return NextResponse.json({ message: "Wrong password" }, { status: 401 });
    }

    // 5️⃣ সব মিললে Login success
    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    // 6️⃣ Error ধরা পড়লে
    console.error("Login error:", err.message);
    return NextResponse.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 }
    );
  }
}

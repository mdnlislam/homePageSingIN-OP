// app/api/login/route.js

import connectDb from "@/lib/dbconnect";
import User from "@/model/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.WT_SECRET;
export async function POST(req) {
  try {
    // 1️⃣ ফর্ম থেকে email আর password নেওয়া
    const { email, password } = await req.json();

    await connectDb();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.password !== password) {
      return NextResponse.json({ message: "Wrong password" }, { status: 401 });
    }

    //make a token
    const token = jwt.sign({ email: user.email, id: user._id }, SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json(
      token,
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
    console.error("Login error:", err.message);
    return NextResponse.json(
      { message: "Something went wrong", error: err.message },
      { status: 500 }
    );
  }
}

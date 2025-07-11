import connectDb from "@/lib/dbconnect";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    await connectDb();

    // Check if email already exists
    const userFind = await User.findOne({ email: body.email });
    console.log("User exists check:", userFind);

    if (userFind) {
      return NextResponse.json(
        {
          message: "User already exists with this email",
          errors: {
            email: "Email already exists!",
          },
        },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = await User.create(body);
    console.log("New user created:", newUser);

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error(" Signup error:", err.message);

    return NextResponse.json(
      {
        message: "Internal server error",
        error: err.message,
      },
      { status: 500 }
    );
  }
}

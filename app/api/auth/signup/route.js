import { NextResponse } from "next/server";
import { users } from "@/lib/users";

export async function POST(req) {
  const body = await req.json();

  const { name, email, password } = body;

  const exists = users.find((u) => u.email === email);

  if (exists) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  users.push({ name, email, password });
  return NextResponse.json({ message: "Signup successful" }, { status: 201 });
}

import { NextResponse } from "next/server";

import { users } from "@/lib/users";

export async function POST(req) {
  const body = await req.json();

  const { email, password } = body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json(
      { message: "invalid credentials" },
      { status: 401 }
    );
  }
  return NextResponse.json({ message: "signin successful" }, { status: 200 });
}

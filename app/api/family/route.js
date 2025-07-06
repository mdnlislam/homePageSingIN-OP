import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "users.json");

  try {
    const data = await readFile(filePath, "utf-8");
    const users = JSON.parse(data);
    return NextResponse.json(users);
  } catch {
    return NextResponse.json([]);
  }
}

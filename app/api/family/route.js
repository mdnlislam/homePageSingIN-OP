// app/api/family/route.js

import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "users.json");

  try {
    const data = await readFile(filePath, "utf-8");
    const users = JSON.parse(data);

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Could not load users." }), {
      status: 500,
    });
  }
}

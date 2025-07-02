// /app/api/register/route.js

import { writeFile, readFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  const body = await req.json();
  const filePath = path.join(process.cwd(), "data", "users.json");

  let existingData = [];

  try {
    const fileData = await readFile(filePath, "utf-8");
    existingData = JSON.parse(fileData);
  } catch (e) {
    existingData = [];
  }

  // Check if email already exists
  const emailExists = existingData.find(
    (user) => user.email.toLowerCase() === body.email.toLowerCase()
  );

  if (emailExists) {
    return new Response(JSON.stringify({ message: "Email already exists!" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Push new data
  existingData.push(body);

  await writeFile(filePath, JSON.stringify(existingData, null, 2));

  return new Response(JSON.stringify({ message: "Registration successful!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

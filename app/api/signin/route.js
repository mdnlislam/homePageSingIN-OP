import { readFile } from "fs/promises";
import { join } from "path";

export async function POST(req) {
  const { email, password } = await req.json();
  const filePath = join(process.cwd(), "lib", "users.json");
  const data = await readFile(filePath, "utf-8");
  const users = JSON.parse(data);

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return new Response(JSON.stringify({ message: "Login successful" }));
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
    });
  }
}

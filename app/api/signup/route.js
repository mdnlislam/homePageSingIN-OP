import { writeFile, readFile } from "fs/promises";
import { join } from "path";

export async function POST(req) {
  try {
    const user = await req.json();
    const filePath = join(process.cwd(), "lib", "users.json");

    let users = [];

    // আগের data পড়ি
    try {
      const data = await readFile(filePath, "utf-8");
      users = JSON.parse(data);
    } catch (err) {
      console.log("New file will be created.");
    }

    // email check
    const exists = users.find((u) => u.email === user.email);
    if (exists) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // নতুন ইউজার যোগ
    users.push(user);

    // আপডেট করা ইউজার লিস্ট ফাইলে লিখি
    await writeFile(filePath, JSON.stringify(users, null, 2));

    // success response
    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

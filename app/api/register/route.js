import { writeFile, readFile } from "fs/promises";
import { mkdirSync, existsSync } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const imageFile = formData.get("image");
  const dob = formData.get("dob");
  const fatherName = formData.get("fatherName");
  const motherName = formData.get("motherName");
  const gender = formData.get("gender");
  const bloodGroup = formData.get("bloodGroup");
  const phone = formData.get("phone");
  const jobSector = formData.get("jobSector");
  const jobPosition = formData.get("jobPosition");
  const school = formData.get("school");
  const college = formData.get("college");
  const varsity = formData.get("varsity");

  // Image Buffer
  const buffer = Buffer.from(await imageFile.arrayBuffer());

  // Filename + Save path
  const fileName = Date.now() + "-" + imageFile.name;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, fileName);

  // যদি uploads folder না থাকে, বানিয়ে ফেলি
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
  }

  // Write image to public/uploads
  await writeFile(filePath, buffer);

  const userData = {
    name,
    email,
    dob,
    fatherName,
    motherName,
    gender,
    bloodGroup,
    phone,
    jobSector,
    jobPosition,
    school,
    college,
    varsity,
    image: "/uploads/" + fileName,
  };

  // Save JSON Data
  const dataPath = path.join(process.cwd(), "data", "users.json");
  let users = [];

  try {
    const existing = await readFile(dataPath, "utf-8");
    users = JSON.parse(existing);
  } catch (err) {
    users = [];
  }

  users.push(userData);
  await writeFile(dataPath, JSON.stringify(users, null, 2));

  return NextResponse.json({ message: "Success", user: userData });
}

import connectDb from "@/lib/dbconnect";
import FamilyMember from "@/models/familyMember";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDb();

  try {
    const users = await FamilyMember.find().sort({ createdAt: -1 }); // সব ইউজার, নতুন আগে
    return NextResponse.json(users);
  } catch (error) {
    console.error("Database read error:", error);
    return NextResponse.json([], { status: 500 });
  }
}

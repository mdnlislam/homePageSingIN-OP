import connectDb from "@/lib/dbconnect";
import FamilyMember from "@/models/familyMember"; // এখন এইটা ইউজ করছেন

export async function POST(req) {
  await connectDb();

  try {
    const data = await req.json();
    const { name, email, phone, gender } = data;

    if (!name || !email || !phone || !gender) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    const existing = await FamilyMember.findOne({ email });
    if (existing) {
      return new Response(
        JSON.stringify({ message: "Email already registered!" }),
        { status: 400 }
      );
    }

    const member = new FamilyMember({ name, email, phone, gender });
    await member.save();

    return new Response(
      JSON.stringify({ message: "Member registered successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Family Register API error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

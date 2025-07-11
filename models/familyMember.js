// models/FamilyMember.js

import mongoose from "mongoose";
const familySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
});

const FamilyMember =
  mongoose.models.FamilyMember || mongoose.model("FamilyMember", familySchema);
export default FamilyMember;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  password: { type: String, required: true, mailegth: 6 },
});

export default mongoose.models.User || mongoose.model("User", userSchema);

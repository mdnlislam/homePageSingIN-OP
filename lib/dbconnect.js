import mongoose from "mongoose";
const MONGODB_URI =
  "mongodb+srv://nurulislam8433:NSzL384NCFvS8poX@cluster0.k0x7epe.mongodb.net/";

export default () => mongoose.connect(MONGODB_URI, { dbName: "signupDb" });

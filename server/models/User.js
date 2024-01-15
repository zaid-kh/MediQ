import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "name is required."],
      unique: [true, "user with that name already exist."],
      minlength: 3,
      maxlength: 15,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, ["this email already in use."]],
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    country: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

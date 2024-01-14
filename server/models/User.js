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
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

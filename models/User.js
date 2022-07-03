const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },

    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: [true, "Please try different email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please proivde a valid email",
      ],
    },

    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },

    password: {
      type: String,
      minlength: 6,
      required: [true, "Please provide a password"],
      select: false, // for security
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    title: {
      type: String,
    },

    about: {
      type: String,
    },

    place: {
      type: String,
    },

    webSite: {
      type: String,
    },

    profile_image: {
      type: String,
      default: "default.jpg",
    },

    blocked: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users" } // to set database collection name manually
);

module.exports = mongoose.model("User", UserSchema);

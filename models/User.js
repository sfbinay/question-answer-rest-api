const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },

    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
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

// UserSchema Methods
UserSchema.methods.generateJwtFromUser = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;
  const payload = {
    id: this.id,
    name: this.name,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });

  return token;
};

UserSchema.pre("save", function (next) {
  // Password Changed
  if (!this.isModified("password")) {
    next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);

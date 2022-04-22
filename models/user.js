const { Schema, model } = require("mongoose");

const UserSchema = Schema(
  {
    email: {
      type: String,
      require: [true, "Email is required"],
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

UserSchema.virtual("lists", {
  ref: "List",
  localField: "_id",
  foreignField: "user",
});

module.exports = model("User", UserSchema);

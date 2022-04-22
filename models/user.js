const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  email: {
    type: String,
    require: [true, "Email is required"],
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
};

module.exports = model("User", UserSchema);

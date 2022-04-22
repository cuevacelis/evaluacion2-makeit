const { Schema, model } = require("mongoose");

const ListSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  name: {
    type: String,
    require: [true, "name is required"],
  },
});

ListSchema.methods.toJSON = function () {
  const { __v, ...list } = this.toObject();
  return list;
};

module.exports = model("List", ListSchema);

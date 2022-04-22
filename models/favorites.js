const { Schema, model } = require("mongoose");

const FavoritesSchema = Schema({
  list: {
    type: Schema.Types.ObjectId,
    ref: "List",
    require: true,
  },
  title: {
    type: String,
    require: [true, "title is required"],
  },
  description: {
    type: String,
    require: [true, "description is required"],
  },
  link: {
    type: String,
    require: [true, "link is required"],
  },
});

FavoritesSchema.methods.toJSON = function () {
  const { __v, ...favorites } = this.toObject();
  return favorites;
};

module.exports = model("Usuario", FavoritesSchema);

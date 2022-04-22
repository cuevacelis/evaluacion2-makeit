const { Schema, model } = require("mongoose");

const ListSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    name: {
      type: String,
      require: [true, "name is required"],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ListSchema.virtual("favorites", {
  ref: "Favorites",
  localField: "_id",
  foreignField: "list",
});

module.exports = model("List", ListSchema);

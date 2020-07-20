const { Schema, model } = require("mongoose");
const soft_delete = require("mongoose-softdelete");

const menuSchema = new Schema(
  {
    menu_name: {
      type: String,
      required: true
    },
    menu_image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: 0
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      required: true
    }
  },
  { timestamps: true }
);

menuSchema.plugin(soft_delete);

module.exports = model("menus", menuSchema);

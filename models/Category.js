const { Schema, model } = require("mongoose");
const soft_delete = require("mongoose-softdelete");

const categorySchema = new Schema(
  {
    category_name: {
      type: String,
      required: true
    },
    category_image: {
      type: String,
      required: true
    },
    tags: [String],
    available_time: {
      type: String,
      required: true
    },
    sub_categories: {
      type: [String],
      default: []
    },
    menus: [
      {
        menuId: {
          type: Schema.Types.ObjectId,
          ref: "menus"
        }
      }
    ],
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    }
  },
  { timestamps: true }
);

categorySchema.plugin(soft_delete);

module.exports = model("category", categorySchema);

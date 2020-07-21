const { Schema, model } = require("mongoose");
const soft_delete = require("mongoose-softdelete");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone_no: {
      type: String,
      required: true
    },
    email: String,
    password: {
      type: String,
      required: true
    },
    menus: [
      {
        menuId: {
          type: Schema.Types.ObjectId,
          ref: "menus"
        }
      }
    ],
    categories: [
      {
        categoryId: {
          type: Schema.Types.ObjectId,
          ref: "category"
        }
      }
    ],
    orders: [
      {
        orderId: {
          type: Schema.Types.ObjectId,
          ref: "orders"
        }
      }
    ],
    role: { type: String, required: true }
  },
  { timestamps: true }
);

userSchema.plugin(soft_delete);

module.exports = model("users", userSchema);

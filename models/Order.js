const { Schema, model } = require("mongoose");
const soft_delete = require("mongoose-softdelete");

const pointSchema = require("./schemas/pointSchema");

const orderSchema = new Schema(
  {
    cart: [
      {
        menuId: {
          type: Schema.Types.ObjectId,
          ref: "menus"
        },
        count: {
          type: Number,
          default: 0
        },
        sub_total_cost: {
          type: Number,
          required: true
        }
      }
    ],
    total_cost: {
      type: Number,
      required: true
    },
    location: {
      type: pointSchema,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

orderSchema.plugin(soft_delete);

module.exports = model("orders", orderSchema);

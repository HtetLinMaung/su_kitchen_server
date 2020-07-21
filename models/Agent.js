const { Schema, model } = require("mongoose");
const soft_delete = require("mongoose-softdelete");

const pointSchema = require("./schemas/pointSchema");

const agentSchema = new Schema(
  {
    shop_name: {
      type: String,
      required: true
    },
    location: {
      type: pointSchema,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  },
  { timestamps: true }
);

agentSchema.plugin(soft_delete);

module.exports = model("agents", agentSchema);

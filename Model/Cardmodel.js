const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    card_type: {
      type: String,
      required: true,
    },
    card_code: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);
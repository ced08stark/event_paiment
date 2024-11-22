import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  montant: {
    type: Number,
    require: true,
  },
  operator: {
    type: String,
    require: true
  },
  motif: {
    type: String,
    require: false
  },
  reference: {
    type: String,
    require: true,
    //unique: true
  },
  user_email: {
    type: String,
    require: true,
  },
  user_name: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = { transactionSchema, Transaction };

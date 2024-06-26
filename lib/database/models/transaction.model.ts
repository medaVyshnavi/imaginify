import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  stripeId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  plan: { require: true, type: String },
  credits: { require: true, type: Number },
  buyer: { type: Schema.Types.ObjectId, ref: "User" }
});

const Transaction = models?.Transaction || model('Transaction',TransactionSchema)

export default Transaction
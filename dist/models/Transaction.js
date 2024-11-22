"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
const Transaction = mongoose_1.default.model("Transaction", transactionSchema);
module.exports = { transactionSchema, Transaction };

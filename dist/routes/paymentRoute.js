"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const paymentController = require("../controllers/paymentController");
router
    .route("/payments/initialize")
    .post(paymentController.payin);
router
    .route("/payments/webhooks")
    .post(paymentController.sendEventLink);
module.exports = router;

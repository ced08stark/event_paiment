import express from "express";
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router
  .route("/payments/initialize")
  .post(paymentController.payin);

router
    .route("/payments/webhooks")
    .post(paymentController.sendEventLink);



module.exports = router;
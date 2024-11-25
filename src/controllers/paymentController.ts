const axios = require('axios');
import crypto from "crypto";
import generatePaymentReference from "../utils/genereReference";
import { sendEmail } from '../utils/sendMail';
const { Transaction } = require("../models/Transaction");


const publicKey = '012d871d-4f96-4ad8-9130-ecf11e3e4c4a';
const privateKey = 'mJEDbKN4BbmpGsrG3oAstqLZOQX3YQjbNX7c53k2b69nK1n2Q1tvPLpndFL5SxYz';

const url = `https://my-coolpay.com/api/${publicKey}/payin`;


const payin = async (req: any, res: any) =>{
  const reference = generatePaymentReference()
  try{
    const data = {
      transaction_amount: parseInt(req.body.amount),
      transaction_currency: req.body.currency,
      transaction_reason: req.body.motif,
      app_transaction_ref: reference,
      customer_phone_number: req.body.phone,
      customer_name: req.body.name,
      customer_email: req.body.email,
      customer_lang: req.body.lang,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "X-PRIVATE-KEY": `${privateKey}`,
    };

    const response = await axios.post(url, data, {
      headers
    });

    if (response) {
        const transaction = new Transaction({
          reference: reference,
          user_email: req.body.email,
          user_name: req.body.name,
          operator: req.body.operator,
          montant: parseInt(req.body.amount),
          motif: req.body.motif,
        });
        const result = await Transaction.create(transaction); 
        if (result) {
          console.log("///payment init success");
          res.status(201).json({ result: response.data });
        }
      }
  }catch(e){
    console.log(e)
    res.status(500).json({ message: "An error occurred" }); 
  }

}


const sendEventLink = async (req: any, res: any) =>{
    let signature = crypto
      .createHash("md5")
      .update(
        req.body.transaction_ref +
          req.body.transaction_type +
          req.body.transaction_amount +
          req.body.transaction_currency +
          req.body.transaction_operator +
          privateKey
      )
      .digest("hex");

    try{
        if (signature == req.body.signature) {
            if (req.body.transaction_status == "SUCCESS") {
              console.log('ici')
                const transaction = await Transaction.findOne({
                    reference: req.body.app_transaction_ref,
                }).exec();
                console.log(transaction)
                if(transaction){
                    sendEmail({
                      customerName: transaction.user_name,
                      transactionAmount: req.body.transaction_amount,
                      transactionCurrency: req.body.transaction_currency,
                      transactionReason: transaction.motif,
                      transactionRef: req.body.app_transaction_ref,
                      customerEmail: transaction.user_email,
                  })
                }
      } else {
        console.log("transaction failed");
      }
          
          res.send(200);
     }
    }
    catch(err){
        console.log(err)
        res.status(500).json({ message: "An error occurred" });
    }
}


module.exports = {
  payin,
  sendEventLink
}
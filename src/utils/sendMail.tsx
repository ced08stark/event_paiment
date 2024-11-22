import React from "react";

import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import PaymentSuccessEmail from "../emails/paymentSuccess";

interface PaymentSuccessProps {
  customerEmail: string;  
  customerName: string;
  transactionAmount: number;
  transactionCurrency: string;
  transactionReason: string;
  transactionRef: string;
}

interface TransportOptions {
  host?: string;
  port?: number;
  secure?: boolean;
  auth?: {
    user: string;
    pass: string;
  };
}




export const sendEmail = async (data: PaymentSuccessProps) => {
  // Rendu HTML avec React Email + Tailwind
  const emailHTML = await render(
    <PaymentSuccessEmail
      customerName={data.customerName}
      transactionAmount={data.transactionAmount}
      transactionCurrency={data.transactionCurrency}
      transactionReason={data.transactionReason}
      transactionRef={data.transactionRef}
    />
  );


  // Configuration du transport Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: "587",
    secure: false,
    auth: {
      user: "objectifcanada.tcf@gmail.com",
      pass: "NbMdEn501pkF7PYq",
    },
  } as nodemailer.TransportOptions);

  // Options de l'e-mail
  const mailOptions = {
    from: '"E-workspace" <votre.email@gmail.com>',
    to: data.customerEmail,
    subject: "Paiement Réussi",
    html: emailHTML, // Ici, la promesse est résolue
  };

  // Envoi de l'e-mail
  await transporter.sendMail(mailOptions);
  console.log("Email envoyé avec succès");
};





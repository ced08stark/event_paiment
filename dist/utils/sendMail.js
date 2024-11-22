"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const react_1 = __importDefault(require("react"));
const render_1 = require("@react-email/render");
const nodemailer_1 = __importDefault(require("nodemailer"));
const paymentSuccess_1 = __importDefault(require("../emails/paymentSuccess"));
const sendEmail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Rendu HTML avec React Email + Tailwind
    const emailHTML = yield (0, render_1.render)(react_1.default.createElement(paymentSuccess_1.default, { customerName: data.customerName, transactionAmount: data.transactionAmount, transactionCurrency: data.transactionCurrency, transactionReason: data.transactionReason, transactionRef: data.transactionRef }));
    // Configuration du transport Nodemailer
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: "587",
        secure: false,
        auth: {
            user: "objectifcanada.tcf@gmail.com",
            pass: "NbMdEn501pkF7PYq",
        },
    });
    // Options de l'e-mail
    const mailOptions = {
        from: '"E-workspace" <votre.email@gmail.com>',
        to: data.customerEmail,
        subject: "Paiement Réussi",
        html: emailHTML, // Ici, la promesse est résolue
    };
    // Envoi de l'e-mail
    yield transporter.sendMail(mailOptions);
    console.log("Email envoyé avec succès");
});
exports.sendEmail = sendEmail;

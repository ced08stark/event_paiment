"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
/**
 * Génère une référence de paiement unique.
 * @returns {string} - La référence de paiement générée.
 */
const generatePaymentReference = () => {
    const timestamp = Date.now().toString(); // Timestamp actuel en millisecondes
    const randomString = crypto_1.default.randomBytes(4).toString("hex"); // Chaîne aléatoire (8 caractères hexadécimaux)
    return `PAY-${timestamp}-${randomString}`; // Format de référence (personnalisable)
};
// Exemple d'utilisation
exports.default = generatePaymentReference;

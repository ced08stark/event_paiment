import crypto from "crypto";

/**
 * Génère une référence de paiement unique.
 * @returns {string} - La référence de paiement générée.
 */
const generatePaymentReference = (): string => {
  const timestamp = Date.now().toString(); // Timestamp actuel en millisecondes
  const randomString = crypto.randomBytes(4).toString("hex"); // Chaîne aléatoire (8 caractères hexadécimaux)
  return `PAY-${timestamp}-${randomString}`; // Format de référence (personnalisable)
};

// Exemple d'utilisation
export default generatePaymentReference;


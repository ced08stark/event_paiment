"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("@react-email/components");
const tailwind_1 = require("@react-email/tailwind");
const PaymentSuccessEmail = ({ customerName, transactionAmount, transactionCurrency, transactionReason, transactionRef, }) => {
    return (react_1.default.createElement(tailwind_1.Tailwind, null,
        react_1.default.createElement(components_1.Html, null,
            react_1.default.createElement(components_1.Head, null),
            react_1.default.createElement(components_1.Body, { className: "bg-gray-100 font-sans" },
                react_1.default.createElement(components_1.Container, { className: "max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md" },
                    react_1.default.createElement(components_1.Heading, { className: "text-primary text-2xl font-bold mb-4" }, "Paiement R\u00E9ussi"),
                    react_1.default.createElement(components_1.Text, { className: "text-gray-700" },
                        "Bonjour ",
                        customerName,
                        ","),
                    react_1.default.createElement(components_1.Text, { className: "text-gray-700" },
                        "Votre paiement de",
                        " ",
                        react_1.default.createElement("span", { className: "font-semibold" },
                            transactionAmount,
                            " ",
                            transactionCurrency),
                        " ",
                        "pour \"",
                        react_1.default.createElement("em", null, transactionReason),
                        "\" a \u00E9t\u00E9 effectu\u00E9 avec succ\u00E8s."),
                    react_1.default.createElement(components_1.Text, { className: "text-gray-700" },
                        "R\u00E9f\u00E9rence de transaction :",
                        " ",
                        react_1.default.createElement("span", { className: "font-semibold" }, transactionRef)),
                    react_1.default.createElement(components_1.Button, { href: "https://go.eventozor.com/o/a/Gr8FirsKiEqdScJYpZQ0pFOjFkwVd05NxU5q8fRNF4EYNHXTnUithFeil0KQO6Q0", className: "bg-blue-600 rounded-md text-white font-bold border border-gray-100 hover:bg-blue-700 py-3 px-8" }, "Enregistrez-vous imm\u00E9diatement \uD83D\uDE80"),
                    react_1.default.createElement(components_1.Text, { className: "mt-4 text-gray-600" }, "Merci d'avoir utilis\u00E9 notre service."),
                    react_1.default.createElement(components_1.Text, { className: "mt-4 text-gray-600" },
                        "Cordialement,",
                        react_1.default.createElement("br", null),
                        "E-workspace"))))));
};
exports.default = PaymentSuccessEmail;

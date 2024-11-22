"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const connectDB = require("./config/dbConn");
const corsOption = require("./config/corsOption");
const paymentRoutes = require("./routes/paymentRoute"); // Import des routes spécifiques
const app = (0, express_1.default)();
const port = 3000;
// Connexion à la base de données
connectDB();
// Middleware pour afficher les logs des requêtes HTTP
app.use((0, morgan_1.default)(":method :url :status :response-time ms"));
// Middleware pour gérer les en-têtes CORS
app.use((0, cors_1.default)(corsOption));
// Middleware pour traiter les requêtes JSON
app.use(express_1.default.json());
// Définition des routes
app.use("/api", paymentRoutes);
// Route de base
app.get("/", (req, res) => {
    res.send("Bienvenue sur votre serveur Express.js en TypeScript avec ES Modules!");
});
// Écoute sur le port après connexion à MongoDB
mongoose_1.default.connection.once("open", () => {
    console.log("Connecté à MongoDB");
    app.listen(port, () => {
        console.log(`Serveur lancé sur http://localhost:${port}`);
    });
});

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

const connectDB = require("./config/dbConn");
const corsOption = require("./config/corsOption");
const paymentRoutes = require("./routes/paymentRoute"); // Import des routes spécifiques

const app = express();
const port = 3000;

// Connexion à la base de données
connectDB();

// Middleware pour afficher les logs des requêtes HTTP
app.use(morgan(":method :url :status :response-time ms"));

// Middleware pour gérer les en-têtes CORS
app.use(cors(corsOption));

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Définition des routes
app.use("/api", paymentRoutes);

// Route de base
app.get("/", (req, res) => {
  res.send("Bienvenue sur votre serveur Express.js en TypeScript avec ES Modules!");
});

// Écoute sur le port après connexion à MongoDB
mongoose.connection.once("open", () => {
  console.log("Connecté à MongoDB");
  app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
  });
});
